'use strict';

const exec = require('child_process').execSync;
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'registry', type: String }
];

const options = commandLineArgs(optionDefinitions);

console.log(`Please login to your npm registry at '${options.registry}'`);
exec(`npm login --registry ${options.registry}`, { stdio: 'inherit' });

exec('npm run build', { stdio: 'inherit' });

console.log(`Publishing to '${options.registry}'`);
exec(`npm publish dist --registry ${options.registry}`, { stdio: 'inherit' });
console.log(`Successfully published ${process.env['npm_package_name']}@${process.env['npm_package_version']}`);

console.log('Pushing version to git');
exec('git push --follow-tags');

console.log('DONE!');
