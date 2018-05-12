const fs = require('fs');
const path = require('path');

const appName = 'hack-a-tonne';

function checkInApp() {
  const parentDir = path.basename(fs.realpathSync(__dirname + '/..'));

  if (parentDir !== appName) {
    console.log(`${parentDir} is not ${appName}`);
    return false;
  }
  console.log(`${parentDir} is  ${appName}\n`);
  return true;
}

function copyIndex() {
  const index = 'dist/adimatch-ui/index.html';
  const dest = '../app/templates';
  copyFile(index, dest, (content) => {
    return content.replace(/src="([^"]+\.js)"/g, 'src="/static/$1"');
  });
}

function copyAssets() {
  const assets = [
    'main.js',
    'polyfills.js',
    'runtime.js',
    'styles.js',
    'vendor.js',
  ];

  const sourceDir = 'dist/adimatch-ui/';
  const destDir = '../app/static';

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }
  for (let asset of assets) {
    copyFile(path.join(sourceDir, asset), destDir);
  }
}

function copyFile(source, destination, callback) {
  if (!fs.existsSync(source)) {
    throw new Error(`Invalid source file ${source}`);
  }

  if (!fs.lstatSync(source).isFile()) {
    throw new Error(`Invalid source file ${source}`);
  }

  if (!fs.lstatSync(destination).isDirectory()) {
    throw new Error(`Invalid destination directory ${destination}`);
  }

  const destFile = path.join(destination, path.basename(source));

  let content = fs.readFileSync(source, 'utf8')
  if (callback) {
    content = callback(content);
  }

  fs.writeFileSync(destFile, content);
  /*const stream = fs.createReadStream(source);
  if (callback) {
    callback(content);
  }
  stream.pipe(fs.createWriteStream(destFile));*/
}

function deploy() {
  if (!checkInApp()) {
    return;
  }

  copyIndex();
  copyAssets();
}
deploy();
