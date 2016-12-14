'use strict';

class Workers
{
	
	static Producer(outputPort)
	{
		var datum = new Date().toLocaleTimeString();
		outputPort.put(datum).then((datum) => {
			console.log(outputPort.name + '.put() : ' + datum);
			
			setTimeout(() => Workers.Producer(outputPort), 1000);
		});
	}
	
	static Consumer(inputPort)
	{		
	 	inputPort.get().then((datum) => {
			console.log(inputPort.name + '.get() : ' + datum);
			
			setTimeout(() => Workers.Consumer(inputPort), 1000);
		});
	}
				
	static Match(value)
	{
		console.log(value);
		if (value <= 0) {
			return false;
		}
		return true;
	}
	
	static Merge(one, two)
	{
		return one + " - " + two;
	}
	
	static CallA(pIn, pOut)
	{
		console.log('callA');
		pIn.get().then((inValue) => {
			return pOut.put("A: " + inValue);
	    }).then(() => {
	     	Workers.CallA(pIn, pOut);
	    });
	}
	
	static* CallB(pIn, pOut)
	{
		console.log('callC');
		var inValue = yield pIn.get();
		yield pOut.put("B: " + inValue)
		yield *Workers.CallB(pIn, pOut);
	}
	
	static CallC(inValue)
	{
		console.log('callC');
		return Promise.resolve("C:" + inValue);
	}
}

if (module && module.exports) {
	module.exports = Workers;
}