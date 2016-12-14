var prdkApi;
var Protocol_d20161214_t173653_998_CurrentWeather;
var WorkerClient_d20161214_t173654_039_GetCurrentPosition;
var WorkerClient_d20161214_t173654_046_Get;

(function (global, factory) {
 	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkApi = require('./../runtime_api');
		Protocol_d20161214_t173653_998_CurrentWeather = require('./Protocol_d20161214_t173653_998_CurrentWeather');
		WorkerClient_d20161214_t173654_039_GetCurrentPosition = require('./WorkerClient_d20161214_t173654_039_GetCurrentPosition');
		WorkerClient_d20161214_t173654_046_Get = require('./WorkerClient_d20161214_t173654_046_Get');
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		global.Main_Weather_20161214173653 = factory();
	}
}(this, function () { 'use strict';


class Main_Weather_20161214173653
{		
	constructor() {

		this.input$1 = prdkApi.Ports.newOutputPort('input$1');
		this.p13$1 = prdkApi.Ports.newOutputPort('p13$1');
		this.p7$1 = prdkApi.Ports.newOutputPort('p7$1');
		this.output$1 = prdkApi.Ports.newInputPort('output$1');
		this.p3$1 = prdkApi.Ports.newInputPort('p3$1');
		this.p9$1 = prdkApi.Ports.newInputPort('p9$1');

		new Protocol_d20161214_t173653_998_CurrentWeather(
			this.input$1,
			this.p13$1,
			this.p7$1,
			this.output$1,
			this.p3$1,
			this.p9$1
		);

		this.worker0 = new WorkerClient_d20161214_t173654_039_GetCurrentPosition(
			this.p7$1,
			this.p9$1
		);

		this.worker1 = new WorkerClient_d20161214_t173654_046_Get(
			this.p13$1,
			this.p3$1
		);
	}

	start() {
		this.worker0.start();
		this.worker1.start();
	}

}

return Main_Weather_20161214173653;
}));
