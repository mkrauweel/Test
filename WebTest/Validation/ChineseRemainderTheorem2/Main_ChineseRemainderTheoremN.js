var prdkApi;
var Protocol_d20170103_t192540_131_MapReduce;
var WorkerClient_d20170103_t192540_179_Compute;
var WorkerClient_d20170103_t192540_227_MergePayload;
var WorkerClient_d20170103_t192540_194_Compute;
var WorkerClient_d20170103_t192540_206_DividePayload;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20170103_t192540_131_MapReduce = require('./Protocol_d20170103_t192540_131_MapReduce');
		WorkerClient_d20170103_t192540_179_Compute = require('./WorkerClient_d20170103_t192540_179_Compute');
		WorkerClient_d20170103_t192540_227_MergePayload = require('./WorkerClient_d20170103_t192540_227_MergePayload');
		WorkerClient_d20170103_t192540_194_Compute = require('./WorkerClient_d20170103_t192540_194_Compute');
		WorkerClient_d20170103_t192540_206_DividePayload = require('./WorkerClient_d20170103_t192540_206_DividePayload');
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
		this.p6p13$1$2 = prdkApi.Ports.newOutputPort('p6p13$1$2');
		this.power$1 = prdkApi.Ports.newOutputPort('power$1');
		this.p14$1 = prdkApi.Ports.newInputPort('p14$1');
		this.p21$1 = prdkApi.Ports.newInputPort('p21$1');
		this.p3p10$1$1 = prdkApi.Ports.newInputPort('p3p10$1$1');
		this.p3p10$1$2 = prdkApi.Ports.newInputPort('p3p10$1$2');
		this.result$1 = prdkApi.Ports.newInputPort('result$1');

		new Protocol_d20170103_t192540_131_MapReduce(
			this.p17$1,
			this.p2$1,
			this.p6p13$1$1,
			this.p6p13$1$2,
			this.power$1,
			this.p14$1,
			this.p21$1,
			this.p3p10$1$1,
			this.p3p10$1$2,
			this.result$1
		);

		this.worker0 = new WorkerClient_d20170103_t192540_179_Compute(
			this.p6p13$1$1,
			this.p3p10$1$1
		);

		this.worker1 = new WorkerClient_d20170103_t192540_227_MergePayload(
			this.p2$1,
			this.p21$1
		);

		this.worker2 = new WorkerClient_d20170103_t192540_194_Compute(
			this.p6p13$1$2,
			this.p3p10$1$2
		);

		this.worker3 = new WorkerClient_d20170103_t192540_206_DividePayload(
			this.p17$1,
			this.p14$1
		);
	}

	start() {
		this.worker0.start();
		this.worker1.start();
		this.worker2.start();
		this.worker3.start();
	}

	stop() {
		this.worker0.stop();
		this.worker1.stop();
		this.worker2.stop();
		this.worker3.stop();
	}

}

return Main_ChineseRemainderTheoremN;
}));
