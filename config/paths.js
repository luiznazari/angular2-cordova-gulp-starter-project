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
	appBuild: resolvePath('mobile/www'),
	appPublic: resolvePath('public'),
	appIndexTs: resolvePath('src/main.ts'),
	appIndexHtml: resolvePath('public/index.html'),
	appBuildResources: resolvePath('mobile/www'),
	appNodeModules: resolvePath('node_modules')
};
