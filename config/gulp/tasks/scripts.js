const gulp = require('gulp');
const tslint = require('gulp-tslint');
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
