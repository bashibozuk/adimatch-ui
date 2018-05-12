#!/usr/bin/env bash
for i in main.js polyfills.js runtime.js styles.js vendor.js; do
  #echo "dist/adimatch-ui/${i}"
  cp "dist/adimatch-ui/${i}" "../hack-a-tonne/app/static/${i}"
 done
