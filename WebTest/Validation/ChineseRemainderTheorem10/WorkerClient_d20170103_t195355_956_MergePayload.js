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
		global.WorkerClient_d20170103_t195355_956_MergePayload = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20170103_t195355_956_MergePayload {

	constructor(
		p2$1,
		p21$1
	) {

		this.p2$1 = p2$1;
		this.p21$1 = p21$1;


	}

	getPorts() {
		var ports = [];
		ports.push(this.p2$1);
		ports.push(this.p21$1);
		return ports;
	}

	start() {


		/*
		 * Treat "ChineseRemainderTheorem.MergePayload" as a static generator function yielding values
		 */			
		prdkCore.WorkerClient.spawnGenerator(ChineseRemainderTheorem.MergePayload, this.p21$1,this.p2$1,10);

	}

	stop() {

	}
}

return WorkerClient_d20170103_t195355_956_MergePayload;
}));
