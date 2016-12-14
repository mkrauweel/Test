'use strict';

function ProducerB(outputPort)
{
	var datum = 'Producer B: ' + new Date().toLocaleTimeString();
    console.log('Performing put: ' + datum);
    
    outputPort.put(datum).then((data) => {
        console.log('Putted data: ' + data);

        setTimeout(() => { ProducerB(outputPort); }, 7000);
    });
	
}