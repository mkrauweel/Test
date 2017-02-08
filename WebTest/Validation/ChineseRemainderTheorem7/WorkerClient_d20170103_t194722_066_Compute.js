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
		global.WorkerClient_d20170103_t194722_066_Compute = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20170103_t194722_066_Compute {

	constructor(
		p6p13$1$6,
		p3p10$1$6
	) {

		this.p6p13$1$6 = p6p13$1$6;
		this.p3p10$1$6 = p3p10$1$6;



		/*
		 * Treat "WebWorker_d20170103_t194722_067_Compute.js" as a web worker script
		 */

		 this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t194722_067_Compute.js', this.p3p10$1$6,this.p6p13$1$6,6);

	}

	getPorts() {
		var ports = [];
		ports.push(this.p6p13$1$6);
		ports.push(this.p3p10$1$6);
		return ports;
	}

	start() {


		/*
		 * Treat "WebWorker_d20170103_t194722_067_Compute.js" as a web worker script
		 */

		 //this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t194722_067_Compute.js', this.p3p10$1$6,this.p6p13$1$6,6);
		 this.webWorkerClient.start();

	}

	stop() {


		 this.webWorkerClient.stop();

	}
}

return WorkerClient_d20170103_t194722_066_Compute;
}));
