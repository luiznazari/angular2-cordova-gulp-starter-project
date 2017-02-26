/**
 * Gulp tasks are in separated files under 'config/gulp/tasks/',
 * thus, allowing a beautiful and human-friendly project structure.
 * 
 * The main file is 'config/gulp/index.js'.
 * To add new tasks, just add a new task files to 'config/gulp/tasks/'.
 */

const fs = require('fs');
const path = require("path");

var tasks = fs
	.readdirSync('./config/gulp/tasks/')
    .filter(function scriptFilter(name) {
        return /(\.(js)$)/i.test(path.extname(name));
    });

tasks.forEach(function(task) {
    require('./config/gulp/tasks/' + task);
});
