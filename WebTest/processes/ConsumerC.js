'use strict';

class ConsumerC
{
	constructor(inputPort) {
		this.inputPort = inputPort;
	}
	
	*run() {
		console.log('Performing get generator: ');
		
		let data = yield this.inputPort.get();
		
		console.log('Getted C...: ' + data);
			
		yield* this.run();
		
	}
}

if (module && module.exports) {
	module.exports = ConsumerC;
}