'use strict';

class ProducerA
{
	constructor(outputPort) {
		this.outputPort = outputPort;
	}
	
	run() {
		var datum = 'Producer A: ' + new Date().toLocaleTimeString();
		console.log('Performing put: ' + datum);
		
		var process = this;
		process.outputPort.put(datum).then((data) => {
	        console.log('Putted data: ' + data);

	        setTimeout(() => { process.run() }, 15000);
	    });
	}
}