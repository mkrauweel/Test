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
		global.WorkerClient_d20161214_t174432_744_Power = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t174432_744_Power {

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
	 	* Treat "ChineseRemainderTheorem.Power" as a static function
	 	*/

		prdkCore.WorkerClient.run(ChineseRemainderTheorem.Power, this.p11$1,this.p14$1,1);

	}
}

return WorkerClient_d20161214_t174432_744_Power;
}));
