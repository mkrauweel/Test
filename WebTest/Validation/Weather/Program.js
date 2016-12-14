


	try { 
		global.$ = require('./../../processes/jquery.js');
	} catch (e) {
		console.log(e.message);
	}

	try { 
		global.CurrentWeather = require('./../../protocols/CurrentWeather.js');
	} catch (e) {
		console.log(e.message);
	}

	try { 
		global.navigator = require('./../../processes/navigator.js');
	} catch (e) {
		console.log(e.message);
	}


	var Main_Weather_20161214173653 = require('./Main_Weather_20161214173653');
	var main = new Main_Weather_20161214173653();

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
	
	main.input$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.input$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p13$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p13$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});

	
	main.p7$1.addListener("putting", (port, data) => {
		console.log('putting ' + port.name + ': ' + stringify(data) + '...');
	});	
	main.p7$1.addListener("putted", (port, data) => {
	    console.log('putted ' + port.name + ': ' + stringify(data) + '!');
	});


	//Listeners for getting and getted events of input ports
		
	main.output$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.output$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p3$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p3$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		

		
	main.p9$1.addListener("getting", (port) => {
		console.log('getting ' + port.name);
	});	
	main.p9$1.addListener("getted", (port, data) => {
		console.log('getted ' + port.name + ': ' + stringify(data) +'!');
	});		


	//Start the protocol
	main.start();	

	//List possible test commands to end-user
	console.log('Possible commands to test circuit behaviour:');
	console.log('- put input$1 myValue');
	console.log('- get output$1');

	//Ask for the first command	
	askForCommand();
