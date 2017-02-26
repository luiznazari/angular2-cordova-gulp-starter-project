const gulp = require('gulp');
const runSequence = require('run-sequence');
const paths = require('../../paths.js');

// ""Exports"" gulp enviroment variables.
// These may be used inside tasks in tasks modules.
const GULP_ENV = {
	prod: false
};
global.GULP_ENV = GULP_ENV;

gulp.task('lint', ['lint:sass', 'lint:ts']);
gulp.task('copy', ['copy:html', 'copy:public']);
gulp.task('compile', ['compile:sass', 'compile:ts']);
gulp.task('bundle', ['bundle:browserify', 'bundle:globals']);

gulp.task('build', function(callback) {
	runSequence(['clean:resources'], 'lint', 'copy', 'compile:sass', 'bundle', callback);
});

gulp.task('build:prod', function(callback) {
	GULP_ENV.prod = true;
	runSequence(['clean:resources'], 'lint', 'copy', 'compile:sass', 'bundle', callback);
});

gulp.task('watch', function() {
	gulp.watch(paths.appSrc + '/**/*.html', ['copy:html']);
	gulp.watch(paths.appSrc + '/scss/*.scss', ['compile:sass']);
	runSequence('bundle:watch');
});
