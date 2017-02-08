var prdkApi;
var Protocol_d20170103_t194905_516_MapReduce;
var WorkerClient_d20170103_t194905_624_DividePayload;
var WorkerClient_d20170103_t194905_553_Compute;
var WorkerClient_d20170103_t194905_562_Compute;
var WorkerClient_d20170103_t194905_570_Compute;
var WorkerClient_d20170103_t194905_599_Compute;
var WorkerClient_d20170103_t194905_579_Compute;
var WorkerClient_d20170103_t194905_607_Compute;
var WorkerClient_d20170103_t194905_630_MergePayload;
var WorkerClient_d20170103_t194905_589_Compute;
var WorkerClient_d20170103_t194905_614_Compute;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20170103_t194905_516_MapReduce = require('./Protocol_d20170103_t194905_516_MapReduce');
		WorkerClient_d20170103_t194905_624_DividePayload = require('./WorkerClient_d20170103_t194905_624_DividePayload');
		WorkerClient_d20170103_t194905_553_Compute = require('./WorkerClient_d20170103_t194905_553_Compute');
		WorkerClient_d20170103_t194905_562_Compute = require('./WorkerClient_d20170103_t194905_562_Compute');
		WorkerClient_d20170103_t194905_570_Compute = require('./WorkerClient_d20170103_t194905_570_Compute');
		WorkerClient_d20170103_t194905_599_Compute = require('./WorkerClient_d20170103_t194905_599_Compute');
		WorkerClient_d20170103_t194905_579_Compute = require('./WorkerClient_d20170103_t194905_579_Compute');
		WorkerClient_d20170103_t194905_607_Compute = require('./WorkerClient_d20170103_t194905_607_Compute');
		WorkerClient_d20170103_t194905_630_MergePayload = require('./WorkerClient_d20170103_t194905_630_MergePayload');
		WorkerClient_d20170103_t194905_589_Compute = require('./WorkerClient_d20170103_t194905_589_Compute');
		WorkerClient_d20170103_t194905_614_Compute = require('./WorkerClient_d20170103_t194905_614_Compute');
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
		this.p6p13$1$5 = prdkApi.Ports.newOutputPort('p6p13$1$5');
		this.p6p13$1$6 = prdkApi.Ports.newOutputPort('p6p13$1$6');
		this.p6p13$1$7 = prdkApi.Ports.newOutputPort('p6p13$1$7');
		this.p6p13$1$8 = prdkApi.Ports.newOutputPort('p6p13$1$8');
		this.power$1 = prdkApi.Ports.newOutputPort('power$1');
		this.p14$1 = prdkApi.Ports.newInputPort('p14$1');
		this.p21$1 = prdkApi.Ports.newInputPort('p21$1');
		this.p3p10$1$1 = prdkApi.Ports.newInputPort('p3p10$1$1');
		this.p3p10$1$2 = prdkApi.Ports.newInputPort('p3p10$1$2');
		this.p3p10$1$3 = prdkApi.Ports.newInputPort('p3p10$1$3');
		this.p3p10$1$4 = prdkApi.Ports.newInputPort('p3p10$1$4');
		this.p3p10$1$5 = prdkApi.Ports.newInputPort('p3p10$1$5');
		this.p3p10$1$6 = prdkApi.Ports.newInputPort('p3p10$1$6');
		this.p3p10$1$7 = prdkApi.Ports.newInputPort('p3p10$1$7');
		this.p3p10$1$8 = prdkApi.Ports.newInputPort('p3p10$1$8');
		this.result$1 = prdkApi.Ports.newInputPort('result$1');

		new Protocol_d20170103_t194905_516_MapReduce(
			this.p17$1,
			this.p2$1,
			this.p6p13$1$1,
			this.p6p13$1$2,
			this.p6p13$1$3,
			this.p6p13$1$4,
			this.p6p13$1$5,
			this.p6p13$1$6,
			this.p6p13$1$7,
			this.p6p13$1$8,
			this.power$1,
			this.p14$1,
			this.p21$1,
			this.p3p10$1$1,
			this.p3p10$1$2,
			this.p3p10$1$3,
			this.p3p10$1$4,
			this.p3p10$1$5,
			this.p3p10$1$6,
			this.p3p10$1$7,
			this.p3p10$1$8,
			this.result$1
		);

		this.worker0 = new WorkerClient_d20170103_t194905_624_DividePayload(
			this.p17$1,
			this.p14$1
		);

		this.worker1 = new WorkerClient_d20170103_t194905_553_Compute(
			this.p6p13$1$1,
			this.p3p10$1$1
		);

		this.worker2 = new WorkerClient_d20170103_t194905_562_Compute(
			this.p6p13$1$2,
			this.p3p10$1$2
		);

		this.worker3 = new WorkerClient_d20170103_t194905_570_Compute(
			this.p6p13$1$3,
			this.p3p10$1$3
		);

		this.worker4 = new WorkerClient_d20170103_t194905_599_Compute(
			this.p6p13$1$6,
			this.p3p10$1$6
		);

		this.worker5 = new WorkerClient_d20170103_t194905_579_Compute(
			this.p6p13$1$4,
			this.p3p10$1$4
		);

		this.worker6 = new WorkerClient_d20170103_t194905_607_Compute(
			this.p6p13$1$7,
			this.p3p10$1$7
		);

		this.worker7 = new WorkerClient_d20170103_t194905_630_MergePayload(
			this.p2$1,
			this.p21$1
		);

		this.worker8 = new WorkerClient_d20170103_t194905_589_Compute(
			this.p6p13$1$5,
			this.p3p10$1$5
		);

		this.worker9 = new WorkerClient_d20170103_t194905_614_Compute(
			this.p6p13$1$8,
			this.p3p10$1$8
		);
	}

	start() {
		this.worker0.start();
		this.worker1.start();
		this.worker2.start();
		this.worker3.start();
		this.worker4.start();
		this.worker5.start();
		this.worker6.start();
		this.worker7.start();
		this.worker8.start();
		this.worker9.start();
	}

	stop() {
		this.worker0.stop();
		this.worker1.stop();
		this.worker2.stop();
		this.worker3.stop();
		this.worker4.stop();
		this.worker5.stop();
		this.worker6.stop();
		this.worker7.stop();
		this.worker8.stop();
		this.worker9.stop();
	}

}

return Main_ChineseRemainderTheoremN;
}));
