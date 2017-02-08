var prdkApi;
var Protocol_d20170103_t193356_989_MapReduce;
var WorkerClient_d20170103_t193357_088_Compute;
var WorkerClient_d20170103_t193357_129_MergePayload;
var WorkerClient_d20170103_t193357_122_DividePayload;
var WorkerClient_d20170103_t193357_073_Compute;
var WorkerClient_d20170103_t193357_102_Compute;
var WorkerClient_d20170103_t193357_111_Compute;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20170103_t193356_989_MapReduce = require('./Protocol_d20170103_t193356_989_MapReduce');
		WorkerClient_d20170103_t193357_088_Compute = require('./WorkerClient_d20170103_t193357_088_Compute');
		WorkerClient_d20170103_t193357_129_MergePayload = require('./WorkerClient_d20170103_t193357_129_MergePayload');
		WorkerClient_d20170103_t193357_122_DividePayload = require('./WorkerClient_d20170103_t193357_122_DividePayload');
		WorkerClient_d20170103_t193357_073_Compute = require('./WorkerClient_d20170103_t193357_073_Compute');
		WorkerClient_d20170103_t193357_102_Compute = require('./WorkerClient_d20170103_t193357_102_Compute');
		WorkerClient_d20170103_t193357_111_Compute = require('./WorkerClient_d20170103_t193357_111_Compute');
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
		this.p6p13$1$3 = prdkApi.Ports.newOutputPort('p6p13$1$3');
		this.p6p13$1$4 = prdkApi.Ports.newOutputPort('p6p13$1$4');
		this.power$1 = prdkApi.Ports.newOutputPort('power$1');
		this.p14$1 = prdkApi.Ports.newInputPort('p14$1');
		this.p21$1 = prdkApi.Ports.newInputPort('p21$1');
		this.p3p10$1$1 = prdkApi.Ports.newInputPort('p3p10$1$1');
		this.p3p10$1$2 = prdkApi.Ports.newInputPort('p3p10$1$2');
		this.p3p10$1$3 = prdkApi.Ports.newInputPort('p3p10$1$3');
		this.p3p10$1$4 = prdkApi.Ports.newInputPort('p3p10$1$4');
		this.result$1 = prdkApi.Ports.newInputPort('result$1');

		new Protocol_d20170103_t193356_989_MapReduce(
			this.p17$1,
			this.p2$1,
			this.p6p13$1$1,
			this.p6p13$1$2,
			this.p6p13$1$3,
			this.p6p13$1$4,
			this.power$1,
			this.p14$1,
			this.p21$1,
			this.p3p10$1$1,
			this.p3p10$1$2,
			this.p3p10$1$3,
			this.p3p10$1$4,
			this.result$1
		);

		this.worker0 = new WorkerClient_d20170103_t193357_088_Compute(
			this.p6p13$1$2,
			this.p3p10$1$2
		);

		this.worker1 = new WorkerClient_d20170103_t193357_129_MergePayload(
			this.p2$1,
			this.p21$1
		);

		this.worker2 = new WorkerClient_d20170103_t193357_122_DividePayload(
			this.p17$1,
			this.p14$1
		);

		this.worker3 = new WorkerClient_d20170103_t193357_073_Compute(
			this.p6p13$1$1,
			this.p3p10$1$1
		);

		this.worker4 = new WorkerClient_d20170103_t193357_102_Compute(
			this.p6p13$1$3,
			this.p3p10$1$3
		);

		this.worker5 = new WorkerClient_d20170103_t193357_111_Compute(
			this.p6p13$1$4,
			this.p3p10$1$4
		);
	}

	start() {
		this.worker0.start();
		this.worker1.start();
		this.worker2.start();
		this.worker3.start();
		this.worker4.start();
		this.worker5.start();
	}

	stop() {
		this.worker0.stop();
		this.worker1.stop();
		this.worker2.stop();
		this.worker3.stop();
		this.worker4.stop();
		this.worker5.stop();
	}

}

return Main_ChineseRemainderTheoremN;
}));
