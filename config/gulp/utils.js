const plumber = require('gulp-plumber');
const paths = require('../paths.js')

function log(msg) {
	let now = new Date();
	let hh = now.getHours();
	let mm = now.getMinutes();
	let ss = now.getSeconds();
	console.log(`[\x1b[90m${pad(hh)}:${pad(mm)}:${pad(ss)}\x1b[0m] ${msg}`);
}

function pad(value) {
	return value.toString().length < 2 ? ('0' + value) : value;
}

function onError(msg) {
	// plumber prevents Gulp from crashing in watching tasks.
	return plumber({
		errorHandler: function(err) {
			console.error(('>>> ' + msg).bold.green);
			console.error('\n\t' + err + '\n');
			this.emit('end');
		}
	})
}

function resolvePath(path) {
	return path.startsWith('/') ? (paths.root + path) : (paths.appNodeModules + '/' + path);
}

module.exports = {
	log: log,
	onError: onError,
	resolvePath: resolvePath
}
