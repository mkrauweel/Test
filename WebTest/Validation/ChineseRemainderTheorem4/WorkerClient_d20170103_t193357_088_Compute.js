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
		global.WorkerClient_d20170103_t193357_088_Compute = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20170103_t193357_088_Compute {

	constructor(
		p6p13$1$2,
		p3p10$1$2
	) {

		this.p6p13$1$2 = p6p13$1$2;
		this.p3p10$1$2 = p3p10$1$2;



		/*
		 * Treat "WebWorker_d20170103_t193357_090_Compute.js" as a web worker script
		 */

		 this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t193357_090_Compute.js', this.p3p10$1$2,this.p6p13$1$2,2);

	}

	getPorts() {
		var ports = [];
		ports.push(this.p6p13$1$2);
		ports.push(this.p3p10$1$2);
		return ports;
	}

	start() {


		/*
		 * Treat "WebWorker_d20170103_t193357_090_Compute.js" as a web worker script
		 */

		 //this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t193357_090_Compute.js', this.p3p10$1$2,this.p6p13$1$2,2);
		 this.webWorkerClient.start();

	}

	stop() {


		 this.webWorkerClient.stop();

	}
}

return WorkerClient_d20170103_t193357_088_Compute;
}));
