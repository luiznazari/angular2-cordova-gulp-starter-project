require('core-js/es6');
require('core-js/es7/reflect');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const window = (new JSDOM('<!doctype html><html><body></body></html>')).window;
const document = window.document;

global.document = document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;
global.Node = window.Node;
global.Event = window.Event;

require('zone.js/dist/zone-node');
// require('zone.js/dist/long-stack-trace-zone');
// require('zone.js/dist/proxy');
// require('zone.js/dist/sync-test');
// require('zone.js/dist/async-test');
// require('zone.js/dist/fake-async-test');

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());

global.window = window;
