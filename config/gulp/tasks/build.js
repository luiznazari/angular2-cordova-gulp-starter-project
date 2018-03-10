const gulp = require('gulp');
const runSequence = require('run-sequence');
const paths = require('../../paths.js');
const utils = require('../utils.js');

// ""Exports"" gulp enviroment variables.
// These may be used inside tasks in tasks modules.
const GULP_ENV = {
	prod: false,
	cordovaBuild: false
};
global.GULP_ENV = GULP_ENV;

function logEnviromentVariables() {
	let variables = '';
	for (variable in GULP_ENV) {
		if (GULP_ENV.hasOwnProperty(variable)) {
			variables += `\n  ${variable}: ${GULP_ENV[variable]}`;
		}
	}
	utils.log('GULP ENVIROMENT VARIABLES:' + variables);
}

gulp.task('lint', ['lint:sass', 'lint:ts']);
gulp.task('copy', ['copy:html', 'copy:public']);
gulp.task('compile', ['compile:sass', 'compile:ts']);
gulp.task('bundle', ['bundle:browserify', 'bundle:globals']);

gulp.task('build', function(callback) {
	logEnviromentVariables();
	runSequence(['clean:resources'], 'lint', 'copy', 'compile:sass', 'bundle', callback);
});

gulp.task('build:prod', function(callback) {
	GULP_ENV.prod = true;
	runSequence('build', callback);
});

gulp.task('build:cordova', function(callback) {
	GULP_ENV.cordovaBuild = true;
	runSequence('build:prod', callback);
});

gulp.task('watch', function() {
	gulp.watch(paths.appSrc + '/**/*.html', ['copy:html']);
	gulp.watch(paths.appSrc + '/scss/*.scss', ['compile:sass']);
	runSequence('bundle:watch');
});
