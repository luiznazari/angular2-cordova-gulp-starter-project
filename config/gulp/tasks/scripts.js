const tsc = require('gulp-typescript');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const tslint = require('gulp-tslint');
const sourcemaps = require('gulp-sourcemaps');
const utils = require('../utils.js')
const paths = require('../../paths.js');

gulp.task('lint:ts', function() {
	return gulp.src([paths.appSrc + '/**/*.ts'])
		.pipe(utils.onError('[tslint] Typescript linting failed'))
		.pipe(tslint({
			"formatter": "verbose",
			"configuration": paths.config + "/.tslintrc.json"
		}))
		.pipe(tslint.report({ emitError: false }));
});

// Not used anymore
gulp.task('compile:ts', function () {
	let tscConfig = require(paths.root + '/tsconfig.json');

	return gulp.src([paths.appSrc + '/**/*.ts', '!' + paths.appSrc + '/**/*.spec.ts'])
		.pipe(utils.onError('[tsc] Typescript compilation failed'))
		.pipe(sourcemaps.init())
		.pipe(tsc(tscConfig.compilerOptions))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.appBuildResources));
});
