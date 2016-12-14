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
		global.WorkerClient_d20161214_t174107_727_Power = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t174107_727_Power {

	constructor(
		p14$1,
		p11$1
	) {

		this.p14$1 = p14$1;
		this.p11$1 = p11$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p14$1);
		ports.push(this.p11$1);
		return ports;
	}

	start() {


		/*
		 * Treat "WebWorker_d20161214_t174107_729_Power.js" as a web worker script
		 */

		 var webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20161214_t174107_729_Power.js', this.p11$1,this.p14$1,1);

	}
}

return WorkerClient_d20161214_t174107_727_Power;
}));
