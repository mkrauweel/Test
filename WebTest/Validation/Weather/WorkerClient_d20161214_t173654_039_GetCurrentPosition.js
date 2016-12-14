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
		global.WorkerClient_d20161214_t173654_039_GetCurrentPosition = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t173654_039_GetCurrentPosition {

	constructor(
		p7$1,
		p9$1
	) {

		this.p7$1 = p7$1;
		this.p9$1 = p9$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p7$1);
		ports.push(this.p9$1);
		return ports;
	}

	start() {


		/*
		 * Treat "navigator.geolocation.getCurrentPosition" as a static function accepting a callback
		 */		

		var callbackFunc = (...args) => navigator.geolocation.getCurrentPosition(...args);

		prdkCore.WorkerClient.resolveCallback(callbackFunc, this.p7$1,undefined,undefined,this.p9$1);

	}
}

return WorkerClient_d20161214_t173654_039_GetCurrentPosition;
}));
