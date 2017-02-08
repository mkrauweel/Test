	if(typeof require !== 'function') { 
		importScripts('/pr/webworkers_api.js');
		importScripts('/processes/ChineseRemainderTheorem.js');
	}
	var prdkApi;
	if(typeof require === 'function') { 
		prdkApi = require(process.cwd() + '/../webworkers_api.js');
		importScripts(process.cwd() + '/../../processes/ChineseRemainderTheorem.js'); 
	}

	var p6p13$1$3 = prdkApi.Ports.newOutputPort(this, 'p6p13$1$3');
	var p3p10$1$3 = prdkApi.Ports.newInputPort(this, 'p3p10$1$3');

	prdkApi.WorkerClient.run(ChineseRemainderTheorem.Compute, this.p3p10$1$3,this.p6p13$1$3,3);
