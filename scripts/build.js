"use strict";

// Deps
const sh = require('shelljs');
const chalk = require('chalk');

const packageName = sh.env['npm_package_name'];


// Main
sh.echo('Start building...');

// Exit on any error
sh.set('-e');

// Cleans aot & dist folders
sh.rm('-Rf', 'aot/');
sh.rm('-Rf', 'dist/');

// TSLint
sh.echo('Start TSLint');
sh.exec('tslint ./src/**/**/*.ts -e ./src/**/**/*.ngfactory.ts');
sh.echo(chalk.cyan('TSLint completed'));

// Aot compilation
sh.echo('Start AoT compilation');
sh.echo('ngc -p tsconfig.aot.json');
sh.exec('ngc -p tsconfig.aot.json');
sh.echo(chalk.cyan('AoT compilation completed'));

// Copies files
sh.echo('Copy files');
sh.cp('-Rf', ['package.json', 'README.md'], 'dist');
sh.echo(chalk.cyan('Copy files completed'));


sh.echo('Inline templates and styles');
sh.exec('gulp');
sh.echo(chalk.cyan('Inlining templates and styles completed'));

// Creates umd bundle
sh.echo('Start bundling');
sh.echo('rollup -c rollup.config.js');
sh.exec('rollup -c rollup.config.js');
sh.echo(chalk.cyan('Bundling completed'));

// Minimizes umd bundle
sh.echo('Start minification');
sh.exec(`uglifyjs ./dist/bundles/${packageName}.umd.js -o ./dist/bundles/${packageName}.umd.min.js`);
sh.echo(chalk.cyan('Minification completed'));

sh.rm('-Rf', 'aot/');

sh.echo(chalk.green('Build successful'));
