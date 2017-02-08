var prdkApi;
var Protocol_d20170103_t192006_906_ChineseRemainderTheorem;
var WorkerClient_d20170103_t192007_134_Compute;
var WorkerClient_d20170103_t192007_160_DividePayload;
var WorkerClient_d20170103_t192007_176_MergePayload;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20170103_t192006_906_ChineseRemainderTheorem = require('./Protocol_d20170103_t192006_906_ChineseRemainderTheorem');
		WorkerClient_d20170103_t192007_134_Compute = require('./WorkerClient_d20170103_t192007_134_Compute');
		WorkerClient_d20170103_t192007_160_DividePayload = require('./WorkerClient_d20170103_t192007_160_DividePayload');
		WorkerClient_d20170103_t192007_176_MergePayload = require('./WorkerClient_d20170103_t192007_176_MergePayload');
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		global.Main_ChineseRemainderTheoremN = factory();
	}
}(this, function () { 'use strict';


class Main_ChineseRemainderTheoremN
{		
	constructor() {

		this.p17$1 = prdkApi.Ports.newOutputPort('p17$1');
		this.p2$1 = prdkApi.Ports.newOutputPort('p2$1');
		this.p6p13$1$1 = prdkApi.Ports.newOutputPort('p6p13$1$1');
		this.power$1 = prdkApi.Ports.newOutputPort('power$1');
		this.p14$1 = prdkApi.Ports.newInputPort('p14$1');
		this.p21$1 = prdkApi.Ports.newInputPort('p21$1');
		this.p3p10$1$1 = prdkApi.Ports.newInputPort('p3p10$1$1');
		this.result$1 = prdkApi.Ports.newInputPort('result$1');

		new Protocol_d20170103_t192006_906_ChineseRemainderTheorem(
			this.p17$1,
			this.p2$1,
			this.p6p13$1$1,
			this.power$1,
			this.p14$1,
			this.p21$1,
			this.p3p10$1$1,
			this.result$1
		);

		this.worker0 = new WorkerClient_d20170103_t192007_134_Compute(
			this.p6p13$1$1,
			this.p3p10$1$1
		);

		this.worker1 = new WorkerClient_d20170103_t192007_160_DividePayload(
			this.p17$1,
			this.p14$1
		);

		this.worker2 = new WorkerClient_d20170103_t192007_176_MergePayload(
			this.p2$1,
			this.p21$1
		);
	}

	start() {
		this.worker0.start();
		this.worker1.start();
		this.worker2.start();
	}

	stop() {
		this.worker0.stop();
		this.worker1.stop();
		this.worker2.stop();
	}

}

return Main_ChineseRemainderTheoremN;
}));
