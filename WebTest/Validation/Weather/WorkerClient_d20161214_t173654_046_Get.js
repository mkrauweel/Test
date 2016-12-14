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
		global.WorkerClient_d20161214_t173654_046_Get = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t173654_046_Get {

	constructor(
		p13$1,
		p3$1
	) {

		this.p13$1 = p13$1;
		this.p3$1 = p3$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p13$1);
		ports.push(this.p3$1);
		return ports;
	}

	start() {


		/*
		 * Treat "$.get" as a static function returning a promise
		 */			
		prdkCore.WorkerClient.resolvePromise($.get, "http:\/\/api.openweathermap.org/data/2.5/weather",this.p13$1,this.p3$1);

	}
}

return WorkerClient_d20161214_t173654_046_Get;
}));
