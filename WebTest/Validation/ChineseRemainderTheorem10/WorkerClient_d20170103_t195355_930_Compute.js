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
		global.WorkerClient_d20170103_t195355_930_Compute = factory();
	}
}(this, function () { 'use strict';


class WorkerClient_d20170103_t195355_930_Compute {

	constructor(
		p6p13$1$8,
		p3p10$1$8
	) {

		this.p6p13$1$8 = p6p13$1$8;
		this.p3p10$1$8 = p3p10$1$8;



		/*
		 * Treat "WebWorker_d20170103_t195355_932_Compute.js" as a web worker script
		 */

		 this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t195355_932_Compute.js', this.p3p10$1$8,this.p6p13$1$8,8);

	}

	getPorts() {
		var ports = [];
		ports.push(this.p6p13$1$8);
		ports.push(this.p3p10$1$8);
		return ports;
	}

	start() {


		/*
		 * Treat "WebWorker_d20170103_t195355_932_Compute.js" as a web worker script
		 */

		 //this.webWorkerClient = new prdkCore.WebWorkerClient('WebWorker_d20170103_t195355_932_Compute.js', this.p3p10$1$8,this.p6p13$1$8,8);
		 this.webWorkerClient.start();

	}

	stop() {


		 this.webWorkerClient.stop();

	}
}

return WorkerClient_d20170103_t195355_930_Compute;
}));
