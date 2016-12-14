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
		global.WorkerClient_d20161214_t174432_803_Power = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20161214_t174432_803_Power {

	constructor(
		p28$1,
		p25$1
	) {

		this.p28$1 = p28$1;
		this.p25$1 = p25$1;

	}

	getPorts() {
		var ports = [];
		ports.push(this.p28$1);
		ports.push(this.p25$1);
		return ports;
	}

	start() {



		/*
	 	* Treat "ChineseRemainderTheorem.Power" as a static function
	 	*/

		prdkCore.WorkerClient.run(ChineseRemainderTheorem.Power, this.p25$1,this.p28$1,2);

	}
}

return WorkerClient_d20161214_t174432_803_Power;
}));
