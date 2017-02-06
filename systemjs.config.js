/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'modules:': 'lib/js/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'modules:angular2/core/bundles/core.umd.js',
      '@angular/common': 'modules:angular2/common/bundles/common.umd.js',
      '@angular/compiler': 'modules:angular2/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'modules:angular2/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'modules:angular2/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'modules:angular2/http/bundles/http.umd.js',
      '@angular/router': 'modules:angular2/router/bundles/router.umd.js',
      '@angular/forms': 'modules:angular2/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'modules:rxjs',
      'angular-in-memory-web-api': 'modules:angular2/angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
