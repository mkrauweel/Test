	if(typeof require !== 'function') { 
		importScripts('/pr/webworkers_api.js');
		importScripts('/processes/ChineseRemainderTheorem.js');
	}
	var prdkApi;
	if(typeof require === 'function') { 
		prdkApi = require(process.cwd() + '/../webworkers_api.js');
		importScripts(process.cwd() + '/../../processes/ChineseRemainderTheorem.js'); 
	}

	var p14$1 = prdkApi.Ports.newOutputPort(this, 'p14$1');
	var p11$1 = prdkApi.Ports.newInputPort(this, 'p11$1');

	prdkApi.WorkerClient.run(ChineseRemainderTheorem.Power, this.p11$1,this.p14$1,1);
