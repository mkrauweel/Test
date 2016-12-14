	if(typeof require !== 'function') { 
		importScripts('/pr/webworkers_api.js');
		importScripts('/processes/ChineseRemainderTheorem.js');
	}
	var prdkApi;
	if(typeof require === 'function') { 
		prdkApi = require(process.cwd() + '/../webworkers_api.js');
		importScripts(process.cwd() + '/../../processes/ChineseRemainderTheorem.js'); 
	}

	var p28$1 = prdkApi.Ports.newOutputPort(this, 'p28$1');
	var p25$1 = prdkApi.Ports.newInputPort(this, 'p25$1');

	prdkApi.WorkerClient.run(ChineseRemainderTheorem.Power, this.p25$1,this.p28$1,2);
