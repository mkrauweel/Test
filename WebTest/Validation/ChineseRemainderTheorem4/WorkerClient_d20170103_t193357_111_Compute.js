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
		global.WorkerClient_d20170103_t193357_111_Compute = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20170103_t193357_111_Compute {

	constructor(
		p6p13$1$4,
		p3p10$1$4
	) {

		this.p6p13$1$4 = p6p13$1$4;
		this.p3p10$1$4 = p3p10$1$4;



		/*
		 * Treat "WebWorker_d20170103_t193357_113_Compute.js" as a web worker script
		 */

		 this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t193357_113_Compute.js', this.p3p10$1$4,this.p6p13$1$4,4);

	}

	getPorts() {
		var ports = [];
		ports.push(this.p6p13$1$4);
		ports.push(this.p3p10$1$4);
		return ports;
	}

	start() {


		/*
		 * Treat "WebWorker_d20170103_t193357_113_Compute.js" as a web worker script
		 */

		 //this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t193357_113_Compute.js', this.p3p10$1$4,this.p6p13$1$4,4);
		 this.webWorkerClient.start();

	}

	stop() {


		 this.webWorkerClient.stop();

	}
}

return WorkerClient_d20170103_t193357_111_Compute;
}));
