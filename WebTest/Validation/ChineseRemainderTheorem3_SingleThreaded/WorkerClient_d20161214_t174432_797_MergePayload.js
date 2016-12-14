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
		global.WorkerClient_d20161214_t174432_797_MergePayload = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t174432_797_MergePayload {

	constructor(
		p2$1,
		p23$1
	) {

		this.p2$1 = p2$1;
		this.p23$1 = p23$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p2$1);
		ports.push(this.p23$1);
		return ports;
	}

	start() {


		/*
		 * Treat "ChineseRemainderTheorem.MergePayload" as a static generator function yielding values
		 */			
		prdkCore.WorkerClient.spawnGenerator(ChineseRemainderTheorem.MergePayload, this.p23$1,this.p2$1,3);

	}
}

return WorkerClient_d20161214_t174432_797_MergePayload;
}));
