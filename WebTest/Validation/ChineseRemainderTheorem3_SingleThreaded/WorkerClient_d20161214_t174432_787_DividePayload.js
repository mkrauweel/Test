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
		global.WorkerClient_d20161214_t174432_787_DividePayload = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t174432_787_DividePayload {

	constructor(
		p18$1,
		p15$1
	) {

		this.p18$1 = p18$1;
		this.p15$1 = p15$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p18$1);
		ports.push(this.p15$1);
		return ports;
	}

	start() {


		/*
		 * Treat "ChineseRemainderTheorem.DividePayload" as a static generator function yielding values
		 */			
		prdkCore.WorkerClient.spawnGenerator(ChineseRemainderTheorem.DividePayload, this.p15$1,this.p18$1,2,97777,3);

	}
}

return WorkerClient_d20161214_t174432_787_DividePayload;
}));
