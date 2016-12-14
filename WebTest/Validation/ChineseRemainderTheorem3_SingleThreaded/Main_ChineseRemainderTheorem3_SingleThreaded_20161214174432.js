var prdkApi;
var Protocol_d20161214_t174432_695_MapReduce;
var WorkerClient_d20161214_t174432_803_Power;
var WorkerClient_d20161214_t174432_797_MergePayload;
var WorkerClient_d20161214_t174432_744_Power;
var WorkerClient_d20161214_t174432_740_Power;
var WorkerClient_d20161214_t174432_787_DividePayload;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20161214_t174432_695_MapReduce = require('./Protocol_d20161214_t174432_695_MapReduce');
		WorkerClient_d20161214_t174432_803_Power = require('./WorkerClient_d20161214_t174432_803_Power');
		WorkerClient_d20161214_t174432_797_MergePayload = require('./WorkerClient_d20161214_t174432_797_MergePayload');
		WorkerClient_d20161214_t174432_744_Power = require('./WorkerClient_d20161214_t174432_744_Power');
		WorkerClient_d20161214_t174432_740_Power = require('./WorkerClient_d20161214_t174432_740_Power');
		WorkerClient_d20161214_t174432_787_DividePayload = require('./WorkerClient_d20161214_t174432_787_DividePayload');
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		global.Main_ChineseRemainderTheorem3_SingleThreaded_20161214174432 = factory();
	}
}(this, function () { 'use strict';


class Main_ChineseRemainderTheorem3_SingleThreaded_20161214174432
{		
	constructor() {

		this.p14$1 = prdkApi.Ports.newOutputPort('p14$1');
		this.p18$1 = prdkApi.Ports.newOutputPort('p18$1');
		this.p2$1 = prdkApi.Ports.newOutputPort('p2$1');
		this.p28$1 = prdkApi.Ports.newOutputPort('p28$1');
		this.p6$1 = prdkApi.Ports.newOutputPort('p6$1');
		this.power$1 = prdkApi.Ports.newOutputPort('power$1');
		this.p11$1 = prdkApi.Ports.newInputPort('p11$1');
		this.p15$1 = prdkApi.Ports.newInputPort('p15$1');
		this.p23$1 = prdkApi.Ports.newInputPort('p23$1');
		this.p25$1 = prdkApi.Ports.newInputPort('p25$1');
		this.p3$1 = prdkApi.Ports.newInputPort('p3$1');
		this.result$1 = prdkApi.Ports.newInputPort('result$1');

		new Protocol_d20161214_t174432_695_MapReduce(
			this.p14$1,
			this.p18$1,
			this.p2$1,
			this.p28$1,
			this.p6$1,
			this.power$1,
			this.p11$1,
			this.p15$1,
			this.p23$1,
			this.p25$1,
			this.p3$1,
			this.result$1
		);

		this.worker0 = new WorkerClient_d20161214_t174432_803_Power(
			this.p28$1,
			this.p25$1
		);

		this.worker1 = new WorkerClient_d20161214_t174432_797_MergePayload(
			this.p2$1,
			this.p23$1
		);

		this.worker2 = new WorkerClient_d20161214_t174432_744_Power(
			this.p14$1,
			this.p11$1
		);

		this.worker3 = new WorkerClient_d20161214_t174432_740_Power(
			this.p6$1,
			this.p3$1
		);

		this.worker4 = new WorkerClient_d20161214_t174432_787_DividePayload(
			this.p18$1,
			this.p15$1
		);
	}

	start() {
		this.worker0.start();
		this.worker1.start();
		this.worker2.start();
		this.worker3.start();
		this.worker4.start();
	}

}

return Main_ChineseRemainderTheorem3_SingleThreaded_20161214174432;
}));
