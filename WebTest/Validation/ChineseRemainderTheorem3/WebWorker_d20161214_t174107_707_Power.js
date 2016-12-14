	if(typeof require !== 'function') { 
		importScripts('/pr/webworkers_api.js');
		importScripts('/processes/ChineseRemainderTheorem.js');
	}
	var prdkApi;
	if(typeof require === 'function') { 
		prdkApi = require(process.cwd() + '/../webworkers_api.js');
		importScripts(process.cwd() + '/../../processes/ChineseRemainderTheorem.js'); 
	}

	var p6$1 = prdkApi.Ports.newOutputPort(this, 'p6$1');
	var p3$1 = prdkApi.Ports.newInputPort(this, 'p3$1');

	prdkApi.WorkerClient.run(ChineseRemainderTheorem.Power, this.p3$1,this.p6$1,0);
