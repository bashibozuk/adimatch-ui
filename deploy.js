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
  const index = 'dist/adiwatch-ui/index.html';
  const dest = '../app/templates';
  copyFile(index, dest);
}

function copyAssets() {
  const assets = [
    'main.js',
    'polyfills.js',
    'runtime.js',
    'styles.js',
    'vendor.js',
  ];

  const sourceDir = 'dist/adiwatch-ui/';
  const destDir = '../app/static';

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }
  for (let asset of assets) {
    copyFile(path.join(sourceDir, asset), destDir);
  }
}

function copyFile(source, destination) {
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

  fs.createReadStream(source).pipe(fs.createWriteStream(destFile));
}

function deploy() {
  if (!checkInApp()) {
    return;
  }

  copyIndex();
  copyAssets();
}
deploy();
