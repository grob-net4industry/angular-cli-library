export default {
  entry: './dist/src/lib/index.js',
  dest: './dist/bundles/angular-cli-library.umd.js',
  format: 'umd',
  moduleName: 'angular-cli-library',
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/http',
    'angular-l10n',
    'rxjs',
    'rxjs/Observable',
    'rxjs/add/operator/toPromise',
    '@angular/common/src/facade/async'
  ],
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/http': 'ng.http',
    'rxjs': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/add/operator/toPromise': 'Rx',
  }
}
