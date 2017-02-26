const _if = require('gulp-if');
const del = require('del');
const gulp = require('gulp');
const tsify = require('tsify');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const assign = require('lodash.assign');
const source = require('vinyl-source-stream');
const watchify = require('watchify');
const browserify = require('browserify');
const utils = require('../utils.js')
const paths = require('../../paths.js');

let tscConfig = require(paths.root + '/tsconfig.json');

function bundler() {
	return browserify({
		entries: [paths.appIndexTs],
		extensions: ['.ts'],
		paths: [paths.appNodeModules, paths.appSrc + '/app'],
		fullPaths: true,
		debug: !GULP_ENV.prod,

		// watchify
		poll: false,
		delay: 100,
		ignoreWatch: ['**/node_modules/**'],
		cache: {},
		packageCache: {}
	})
		.plugin(tsify, tscConfig.compilerOptions);
};

function bundle(bundler) {
	return bundler
		.bundle()
		.pipe(utils.onError('[browserify] Browserify bundle failed'))
		.pipe(source('bundle.min.js'))
		.pipe(_if(GULP_ENV.prod, buffer()))
		.pipe(_if(GULP_ENV.prod, uglify()))
		.pipe(gulp.dest(paths.appBuildResources + '/js'));
}

gulp.task('bundle:browserify', function() {
	if (GULP_ENV.prod) {
		utils.log('Optimizing bundled files...');
	}
	return bundle(bundler());
});

gulp.task('bundle:watch', function() {
	let b = watchify(bundler());
	b.on('update', () => bundle(b));
	b.on('log', utils.log);

	// We need to call 'bundle' for Watchify start watching.
	return b.bundle();
});

// Concat and uglify golbal libraries.
// Global libraries should not be imported into app's modules (eg.: main.ts).
gulp.task('bundle:globals', function() {
	let globals = require(paths.appSrc + "/index.globals.json");
	let modules = (globals.modules || []).map(module => paths.appNodeModules + '/' + module);

	gulp.src(modules)
		.pipe(concat('globals.min.js'))
		.pipe(_if(GULP_ENV.prod, uglify()))
		.pipe(gulp.dest(paths.appBuildResources + '/js'));

	let styles = (globals.styles || []).map(style => paths.appNodeModules + '/' + style);
	return gulp.src(styles)
		.pipe(concat('globals.min.css'))
		.pipe(_if(GULP_ENV.prod, uglify()))
		.pipe(gulp.dest(paths.appBuildResources + '/css'));
});
