'use strict';

class ConsumerC
{
		
	static *run(inputPort) {
		console.log('Performing get: ');
		
		let data = yield inputPort.get();
		
		console.log('Getted C...: ' + data);
		
		yield* ConsumerC.run(inputPort);
	}
}