'use strict';

class WorkerFunctions
{
	static SquaredDoubled(outputPort, inputPort)
	{
		var valueToPut = 4;
		outputPort.put(valueToPut).then((puttedValue) => {
			console.log(outputPort.name + '.put() : ' + puttedValue);
			return inputPort.get();
		}).then((gettedValue) => {
			console.log(inputPort.name + '.get() : ' + gettedValue);
		});		
	}
	
	static Squared(inputPort, outputPort)
	{
		inputPort.get().then((gettedValue) => {
			console.log(inputPort.name + '.get() : ' + gettedValue);
			var valueToPut = gettedValue * gettedValue;
			return outputPort.put(valueToPut);
		}).then((puttedValue) => {
			console.log(outputPort.name + '.put() : ' + puttedValue);
		});
	}
	
	static Doubled(inputPort, outputPort)
	{
		inputPort.get().then((gettedValue) => {
			console.log(inputPort.name + '.get() : ' + gettedValue);
			var valueToPut = 2 * gettedValue;
			return outputPort.put(valueToPut);
		}).then((puttedValue) => {
			console.log(outputPort.name + '.put() : ' + puttedValue);
		});
	}
}