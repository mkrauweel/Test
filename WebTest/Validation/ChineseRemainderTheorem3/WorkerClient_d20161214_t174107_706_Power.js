var prdkCore;

(function (global, factory) {
	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkCore = require('./../runtime_core');
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		global.WorkerClient_d20161214_t174107_706_Power = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t174107_706_Power {

	constructor(
		p6$1,
		p3$1
	) {

		this.p6$1 = p6$1;
		this.p3$1 = p3$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p6$1);
		ports.push(this.p3$1);
		return ports;
	}

	start() {


		/*
		 * Treat "WebWorker_d20161214_t174107_707_Power.js" as a web worker script
		 */

		 var webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20161214_t174107_707_Power.js', this.p3$1,this.p6$1,0);

	}
}

return WorkerClient_d20161214_t174107_706_Power;
}));
