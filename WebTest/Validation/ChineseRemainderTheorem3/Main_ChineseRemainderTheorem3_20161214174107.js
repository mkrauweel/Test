var prdkApi;
var Protocol_d20161214_t174107_667_MapReduce;
var WorkerClient_d20161214_t174107_706_Power;
var WorkerClient_d20161214_t174107_727_Power;
var WorkerClient_d20161214_t174107_746_DividePayload;
var WorkerClient_d20161214_t174107_754_MergePayload;
var WorkerClient_d20161214_t174107_762_Power;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20161214_t174107_667_MapReduce = require('./Protocol_d20161214_t174107_667_MapReduce');
		WorkerClient_d20161214_t174107_706_Power = require('./WorkerClient_d20161214_t174107_706_Power');
		WorkerClient_d20161214_t174107_727_Power = require('./WorkerClient_d20161214_t174107_727_Power');
		WorkerClient_d20161214_t174107_746_DividePayload = require('./WorkerClient_d20161214_t174107_746_DividePayload');
		WorkerClient_d20161214_t174107_754_MergePayload = require('./WorkerClient_d20161214_t174107_754_MergePayload');
		WorkerClient_d20161214_t174107_762_Power = require('./WorkerClient_d20161214_t174107_762_Power');
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		global.Main_ChineseRemainderTheorem3_20161214174107 = factory();
	}
}(this, function () { 'use strict';


class Main_ChineseRemainderTheorem3_20161214174107
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

		new Protocol_d20161214_t174107_667_MapReduce(
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

		this.worker0 = new WorkerClient_d20161214_t174107_706_Power(
			this.p6$1,
			this.p3$1
		);

		this.worker1 = new WorkerClient_d20161214_t174107_727_Power(
			this.p14$1,
			this.p11$1
		);

		this.worker2 = new WorkerClient_d20161214_t174107_746_DividePayload(
			this.p18$1,
			this.p15$1
		);

		this.worker3 = new WorkerClient_d20161214_t174107_754_MergePayload(
			this.p2$1,
			this.p23$1
		);

		this.worker4 = new WorkerClient_d20161214_t174107_762_Power(
			this.p28$1,
			this.p25$1
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

return Main_ChineseRemainderTheorem3_20161214174107;
}));
