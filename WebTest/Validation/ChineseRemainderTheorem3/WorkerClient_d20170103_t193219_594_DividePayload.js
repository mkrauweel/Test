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
		global.WorkerClient_d20170103_t193219_594_DividePayload = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20170103_t193219_594_DividePayload {

	constructor(
		p17$1,
		p14$1
	) {

		this.p17$1 = p17$1;
		this.p14$1 = p14$1;


	}

	getPorts() {
		var ports = [];
		ports.push(this.p17$1);
		ports.push(this.p14$1);
		return ports;
	}

	start() {


		/*
		 * Treat "ChineseRemainderTheorem.DividePayload" as a static generator function yielding values
		 */			
		prdkCore.WorkerClient.spawnGenerator(ChineseRemainderTheorem.DividePayload, this.p14$1,this.p17$1,2,97777,3);

	}

	stop() {

	}
}

return WorkerClient_d20170103_t193219_594_DividePayload;
}));
