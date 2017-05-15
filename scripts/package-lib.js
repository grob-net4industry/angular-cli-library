'use strict';

const sh = require('shelljs');

// Exit on any error
sh.set('-e');

// Get package name from npm run environment variables
let packagePath = `${sh.env['npm_package_name']}-${sh.env['npm_package_version']}.tgz`;

// Remove package lib, if already exists
if (sh.test('-e', packagePath)) {
  sh.rm(packagePath);
}

// package lib for testing
sh.exec('npm pack dist');
