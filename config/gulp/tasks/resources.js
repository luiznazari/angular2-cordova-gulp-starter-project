const del = require('del');
const gulp = require('gulp');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const cleanHTML = require('gulp-cleanhtml');
const paths = require('../../paths.js');


gulp.task('clean:resources', function() {
	return del(paths.appBuildResources + '/**/*')
})

// Copy and clean all HTML from sources, and copy to the build path,
// file structure is preserved.
gulp.task('copy:html', function() {
	gulp.src(
		[paths.appSrc + '/app/**/*.html'],
		{ base: paths.appSrc + '/' }
	)
		.pipe(cleanHTML())
		.pipe(rename({ dirname: '' }))
		.pipe(gulp.dest(paths.appBuildResources))

	let baseHref = GULP_ENV.cordovaBuild ? './' : '/';
	return gulp.src(paths.appIndexHtml)
		.pipe(replace('{{base_href}}', baseHref))
		.pipe(replace('{{properties_json}}', JSON.stringify(GULP_ENV)))
		.pipe(cleanHTML())
		.pipe(gulp.dest(paths.appBuildResources));
});

// Copy all public content to the build path.
gulp.task('copy:public', function() {
	return gulp.src(
		[paths.appPublic + '/images/**', paths.appPublic + '/cordova.js'],
		{ base: paths.appPublic + '/' }
	)
		.pipe(gulp.dest(paths.appBuildResources))
});
