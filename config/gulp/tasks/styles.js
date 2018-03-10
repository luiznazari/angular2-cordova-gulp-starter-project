const _if = require('gulp-if');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sassLint = require('gulp-sass-lint');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const utils = require('../utils.js')
const paths = require('../../paths.js');

// Lint SASS/SCSS
gulp.task('lint:sass', function() {
	return gulp.src(paths.appSrc + '/**/*.scss')
		.pipe(utils.onError('[sass-lint] Sass linting failed'))
		.pipe(sassLint({
			"options": {
				"config-file": paths.config + "/.sasslintrc.yml"
			}
		}))
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
});

// Compile SASS/SCSS to CSS, concatenate, apply autoprefixes and minify.
gulp.task('compile:sass', function() {
	return gulp.src([
			paths.appSrc + '/**/*.scss',
			'!' + paths.appSrc + '/**/_*.scss'
		])
		.pipe(utils.onError('[sass] Sass global style compilation failed'))
		.pipe(_if(!GULP_ENV.prod, sourcemaps.init()))
		.pipe(sass({ errLogToConsole: true }))
		.pipe(concat('styles.min.css'))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(_if(GULP_ENV.prod, cleanCSS()))
		.pipe(_if(!GULP_ENV.prod, sourcemaps.write()))
		.pipe(gulp.dest(paths.appBuildResources + '/css'))
});
