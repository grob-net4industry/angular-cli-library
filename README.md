# AngularCliLibrary

The following adjustments need to be done 
 
  * `.angular-cli.json`: `name` 
  * `package.json`: `name`, `main`-path, `peerDependencies`
  * `rollup.config.js`: `dest`-path, `moduleName`, `external` and `global` for dependencies (see rollup docs)
  * add global styles to `src/lib/lib-styles.scss`
  * add scss variables/functions to `src/lib/variables.scss`
  * add your library components to `src/lib/<component>/` and export properly in `/src/lib/index.ts`
  * add imports/declarations/exports etc in `src/lib/angular-cli-library.module.ts`, 
    rename this file to whatever your library will be called and adjust the exported class name inside the file.
  
  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

Make sure you have installed it globally with `npm i -g @angular/cli`

## Installing
* If you want to use this library, simply install it in your project by typing
`npm install angular-cli-library --save`

* Import the library into your `app.module`
  ```js
  import { AngularCliLibrary } from 'angular-cli-library';

  @NgModule({
    ...
    imports: [
      ...
      AngularCliLibrary
    ],
    ...
  })
  export class AppModule { }

  ```

* Make sure you import the global styles
  + If you have a build step in your project, add to your global scss file and compile it yourself
  `@import ./<path-to-node-modules-folder>/angular-cli-library/src/lib/lib-styles.scss`

  + If you do not have a build step in your project, add this line to your html file
  `<link rel="stylesheet" href="./<path-to-node-modules-folder>/angular-cli-library/src/lib/lib-styles.css" />`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Prepackaging
If you want to test the build library in your project, but don't want to publish it to the registry yet,
you can run the following:
`npm run package-lib`.
This will create a <package-name>-<package-version>.tgz file, which you can easily install in your project with
`npm install <path-to-build-lib>`

