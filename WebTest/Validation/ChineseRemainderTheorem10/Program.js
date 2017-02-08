


	try { 
		global.ChineseRemainderTheorem = require('./../../processes/ChineseRemainderTheorem.js');
	} catch (e) {
		console.log(e.message);
	}

	try { 
		global.MapReduce = require('./../../protocols/MapReduce.js');
	} catch (e) {
		console.log(e.message);
	}


	var Main_ChineseRemainderTheoremN = require('./Main_ChineseRemainderTheoremN');
	var main = new Main_ChineseRemainderTheoremN();

	function putValue(portName, value) {
		var port = main[portName];
		if (port) {
	    	return port.put(value);
	    }
	}

	function getValue(portName) {
	 	var port = main[portName];

		if (port) {
	    	return port.get();
	    }
	}

	function stringify(value)
	{
		return JSON.stringify(value);
	}

	function askForCommand()
	{
		const readline = require('readline');

		const rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout
		});

		rl.on('line', (command) => {
		  console.log('Your command was:', command);
		  var commandParts = command.split(" "); 
		  if (commandParts.length === 3 && commandParts[0] == 'put') {
			  var portName = commandParts[1];
			  var value = commandParts[2];
			  putValue(portName, value);
		  }
		  else if (commandParts.length === 2 && commandParts[0] == 'get') {
			  var portName = commandParts[1];
			  getValue(portName);
		  }
		  rl.close();
		  if (command === "quit" || command === "exit") {
			 process.exit();
		  }
		  else {
		   	 askForCommand();
		  }
		});
	}

	//Listener for putting and putted events of input ports
	
	main.p17$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p17$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p2$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p2$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$10.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$10.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$2.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$2.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$3.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$3.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$4.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$4.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$5.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$5.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$6.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$6.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$7.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$7.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$8.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$8.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p6p13$1$9.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p6p13$1$9.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.power$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.power$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});


	//Listeners for getting and getted events of input ports
		
	main.p14$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p14$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p21$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p21$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$10.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$10.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$2.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$2.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$3.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$3.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$4.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$4.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$5.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$5.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$6.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$6.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$7.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$7.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$8.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$8.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3p10$1$9.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3p10$1$9.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.result$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.result$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		


	//Start the protocol
	main.start();	

	//List possible test commands to end-user
	console.log('Possible commands to test circuit behaviour:');
	console.log('- put power$1 myValue');
	console.log('- get result$1');

	//Ask for the first command	
	askForCommand();
