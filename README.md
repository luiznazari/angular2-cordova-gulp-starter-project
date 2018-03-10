# Cordova + Angular 2 + Browserify starter project

## Features

- Angular 2;
- Build process powered by Gulp, support development and production builds;
- Live reloading enabled with Watchify;
- Support for SASS/SCSS styles;
- JavaScript and SASS/SCSS linters.

## TODO
- Configure Cordova commands on `packages.json`;

### Project description

```
my-app/
  config/
    - Centers all configuration and scripts files.
    - `.sasslintrc.yml` and `.tslintrc.json` can be customized as needed.
    gulp/
      - Gulp tasks are defined here.
  cordova/
    - Cordova project settings.
    www/
      - Output directory of build process.
  public/
    - Public files.
  src/
    - The APP's source files (eg.: '.js', '.scss').
```

## Available Scripts

From the project's root directory:

### `npm start`

Runs the app in the development mode and watch files for changes.

### `npm run build`

Builds the app for production to the `cordova/www` folder.<br>
Then you can run `cordova build <platform>` from `cordova` directory.

## Editors

Suggestions of configurations for specifc editors.

### Visual Studio Code

Install [TSLing plugin](https://marketplace.visualstudio.com/items?itemName=eg2.tslint).

Install [Sass Lint plugin](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint).

**settings.json:**
```
{
	// "Cleans" workspace.
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/node_modules/": true,
        "**/*.js": {"when": "$(basename).ts"},
        "**/*.js.map": {"when": "$(basename)"}
    },

    // Share same configurations as when building APP for SCSS files.
    "scss.validate": false,
    "sasslint.enable": true,
    "sasslint.configFile": "./config/.sasslintrc.yml",

    // Share same configurations as when building APP for JavaScript files
    "tslint.enable": true,
    "tslint.configFile": "./config/.tslintrc.json",

    "typescript.validate.enable": true,
    "typescript.tsdk": "./node_modules/typescript/lib"
}
```
