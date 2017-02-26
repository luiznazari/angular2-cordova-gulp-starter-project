const del = require('del');
const gulp = require('gulp');
const rename = require('gulp-rename');
const cleanHTML = require('gulp-cleanhtml');
const paths = require('../../paths.js');


gulp.task('clean:resources', function() {
  return del(paths.appBuildResources + '/**/*')
})

// Copy and clean all HTML from sources, and copy to the build path,
// file structure is preserved.
gulp.task('copy:html', function() {
	return gulp.src(
			[paths.appSrc + '/**/*.html'],
			{ base: paths.appSrc + '/'}
		)
		.pipe(cleanHTML())
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest(paths.appBuildResources))
});

// Copy all public content to the build path.
gulp.task('copy:public', function() {
	return gulp.src(
			[paths.appPublic + '/**/*'],
			{ base: paths.appPublic + '/'}
		)
		.pipe(gulp.dest(paths.appBuildResources))
});
