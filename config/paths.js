const fs = require('fs');
const url = require('url');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

function resolvePath(relativePath) {
	return path.resolve(appDirectory, relativePath);
}

function getPublicUrl(appPackageJson) {
	return require(appPackageJson).homepage;
}

// Export app's paths, used in Gulp build process.
module.exports = {
	root: resolvePath(''),
	config: resolvePath('config'),
	appSrc: resolvePath('src'),
	appBuild: resolvePath('cordova/www'),
	appPublic: resolvePath('public'),
	appIndexTs: resolvePath('src/main.ts'),
	appIndexHtml: resolvePath('src/index.html'),
	appBuildResources: resolvePath('cordova/www'),
	appNodeModules: resolvePath('node_modules')
};
