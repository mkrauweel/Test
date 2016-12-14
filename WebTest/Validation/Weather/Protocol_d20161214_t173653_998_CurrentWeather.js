var prdkCore;

(function (global, factory) {
	if(typeof exports === 'object' && typeof module !== 'undefined') { 
		prdkCore = require('./../runtime_core');
		module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) {
		define(factory);
	}
	else {
		global.Protocol_d20161214_t173653_998_CurrentWeather = factory();
	}
}(this, function () { 'use strict';


class Protocol_d20161214_t173653_998_CurrentWeather {

	//
	// CONSTRUCTORS
	//

	constructor(
		input$1,
		p13$1,
		p7$1,
		output$1,
		p3$1,
		p9$1
	) {

		/*
		 * Set public ports
		 */

		this.input$1 = input$1;
		this.output$1 = output$1;
		this.p13$1 = p13$1;
		this.p3$1 = p3$1;
		this.p7$1 = p7$1;
		this.p9$1 = p9$1;

		/*
		 * Set private ports
		 */

		this.$inp15$6 = new prdkCore.PrivatePort('$inp15$6');
		this.$inp2$6 = new prdkCore.PrivatePort('$inp2$6');
		this.$outp16$6 = new prdkCore.PrivatePort('$outp16$6');
		this.$outp18$6 = new prdkCore.PrivatePort('$outp18$6');

		/*
		 * Set automata
		 */

		this.automaton13 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton13();
		this.automaton18 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton18();
		this.automaton24 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton24();
		this.automaton30 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton30();
		this.automaton35 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton35();

		/*
		 * Memory cells
		 */

		this.memoryCell2 = new prdkCore.MemoryCell();
		this.memoryCell4 = new prdkCore.MemoryCell();

		/*
		 * Variable pool
		 */

		this.variablePool = new prdkCore.CspVariablePool();

		/*
		 * Initialize
		 */

		this.initialize();

		/*
		 * Start
		 */

		this.start();

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	initialize() {

		/*
		 * Initialize ports in automaton #24
		 */

		{
			this.input$1.handler = new HandlerForinput$1(this);
			this.p9$1.handler = new HandlerForp9$1(this);
			this.$inp2$6.masterHandler = new HandlerFor$inp2$6(this);
		}


		/*
		 * Initialize ports in automaton #30
		 */

		{
			this.p7$1.handler = new HandlerForp7$1(this);
			this.p3$1.handler = new HandlerForp3$1(this);
			this.$inp15$6.masterHandler = new HandlerFor$inp15$6(this);
			this.$outp16$6.masterHandler = new HandlerFor$outp16$6(this);
		}


		/*
		 * Initialize ports in automaton #35
		 */

		{
			this.p13$1.handler = new HandlerForp13$1(this);
			this.output$1.handler = new HandlerForoutput$1(this);
			this.$outp18$6.masterHandler = new HandlerFor$outp18$6(this);
		}

		/*
		 * Initialize automata
		 */

		this.automaton13.initialize(this);
		this.automaton18.initialize(this);
		this.automaton24.initialize(this);
		this.automaton30.initialize(this);
		this.automaton35.initialize(this);
	}

	start() {
		this.automaton13.start();
		this.automaton18.start();
		this.automaton24.start();
		this.automaton30.start();
		this.automaton35.start();
	}

}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton13 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(0);

		/*
		 * Current state
		 */

		this.current = new prdkCore.Current();


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton13_State1();
		this.state2 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton13_State2();

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Initialize states
		 */

		this.state1.initialize(protocol);
		this.state2.initialize(protocol);

		/*
		 * Reach initial state
		 */

		this.state1.reach();

		/*
		 * Return
		 */

		return;
	}

	isCurrentState1() {
		return this.current.state == this.state1;
	}

	isCurrentState2() {
		return this.current.state == this.state2;
	}

	reachSuccessor() {
		this.current.state.reachSuccessor();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton13_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set current state
		 */

		this.current = protocol.automaton13.current;

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton13.state2;
		/*
		 * Set ports 
		 */

		this.$inp2$6 = protocol.$inp2$6;

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Update current state
		 */

		this.current.state = this;

		/*
		 * Notify masters of private ports
		 */

		this.$inp2$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton13_State2 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set current state
		 */

		this.current = protocol.automaton13.current;

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton13.state1;
		/*
		 * Set ports 
		 */

		this.$outp16$6 = protocol.$outp16$6;

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Update current state
		 */

		this.current.state = this;

		/*
		 * Notify masters of private ports
		 */

		this.$outp16$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton18 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(0);

		/*
		 * Current state
		 */

		this.current = new prdkCore.Current();


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton18_State1();
		this.state2 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton18_State2();

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Initialize states
		 */

		this.state1.initialize(protocol);
		this.state2.initialize(protocol);

		/*
		 * Reach initial state
		 */

		this.state1.reach();

		/*
		 * Return
		 */

		return;
	}

	isCurrentState1() {
		return this.current.state == this.state1;
	}

	isCurrentState2() {
		return this.current.state == this.state2;
	}

	reachSuccessor() {
		this.current.state.reachSuccessor();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton18_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set current state
		 */

		this.current = protocol.automaton18.current;

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton18.state2;
		/*
		 * Set ports 
		 */

		this.$inp15$6 = protocol.$inp15$6;

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Update current state
		 */

		this.current.state = this;

		/*
		 * Notify masters of private ports
		 */

		this.$inp15$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton18_State2 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set current state
		 */

		this.current = protocol.automaton18.current;

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton18.state1;
		/*
		 * Set ports 
		 */

		this.$outp18$6 = protocol.$outp18$6;

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Update current state
		 */

		this.current.state = this;

		/*
		 * Notify masters of private ports
		 */

		this.$outp18$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton24 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 1);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton24_State1();

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Initialize states
		 */

		this.state1.initialize(protocol);

		/*
		 * Reach initial state
		 */

		this.state1.reach();

		/*
		 * Return
		 */

		return;
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton24_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton24_Transition2();

		/*
		 * Set observable transitions per port
		 */

						


		/*
		 * Fairness indices for observable transitions
		 */

			

		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton24.state1;
		/*
		 * Set ports 
		 */

		this.$inp2$6 = protocol.$inp2$6;
		this.input$1 = protocol.input$1;
		this.p9$1 = protocol.p9$1;

		/*
		 * Initialize transitions
		 */

		this.transition2.initialize(protocol);

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Unblock public ports
		 */

		this.input$1.semaphore.release();
		this.p9$1.semaphore.release();

		/*
		 * Notify masters of private ports
		 */

		this.$inp2$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton24_Transition2 extends prdkCore.Transition {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


	}

	//
	// METHODS - PUBLIC
	//

	fire() {

		/*
		 * Lock slaves
		 */

		//automaton13.semaphore.acquireUninterruptibly();

		/*
		 * Check synchronization/data constraint
		 */

		var canFire = this.checkSynchronizationSet() && this.checkDataConstraint();

		/*
		 * Finalize transition
		 */

		if (canFire) {

			/*
			 * Update context
			 */

			this.context.remove(0, 0b00000000000000000000000000000011);

			/*
			 * Unblock ports
			 */

			this.input$1.status = prdkCore.IO.COMPLETED;
			this.input$1.semaphore.release();
			this.p9$1.status = prdkCore.IO.COMPLETED;
			this.p9$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();

			/*
			 * Update current states in predictable slaves
			 */

			this.automaton13.state2.reach();
		}

		/*
		 * Unlock slaves
		 */

		//automaton13.semaphore.release();

		/*
		 * Return
		 */

		return canFire;
	}

	initialize(protocol) {

		/*
		 * Set context
		 */

		this.context = protocol.automaton24.context;

		/*
		 * Set ports 
		 */

		this.$inp2$6 = protocol.$inp2$6;
		this.input$1 = protocol.input$1;
		this.p9$1 = protocol.p9$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton24_Transition2_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton24.state1;

		/*
		 * Set predictable slaves
		 */

		this.automaton13 = protocol.automaton13;

		/*
		 * Return
		 */

		 return;
	}

	//
	// METHODS - PROTECTED
	//

	checkDataConstraint() {
		return this.dataConstraint.solve();
	}

	checkSynchronizationSet() {
		return true
			&& this.context.contains(0, 0b00000000000000000000000000000011)
			&& this.automaton13.isCurrentState1();
	}
}

	//
	// CLASSES
	//

	class Protocol_d20161214_t173653_998_CurrentWeather_Automaton24_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.input$1 = protocol.variablePool.newOrGetPortVariable(protocol.input$1);
			this.p9$1 = protocol.variablePool.newOrGetPortVariable(protocol.p9$1);
			this.$inp2$6 = protocol.variablePool.newOrGetPortVariable(protocol.$inp2$6);
			this.memoryCell2$post = protocol.variablePool.newOrGetPostVariable(protocol.memoryCell2);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.$inp2$6.resetPortBuffer();
			this.input$1.importValue();
			this.$inp2$6.setValue(this.input$1.getValue());
			this.p9$1.setValue(this.input$1.getValue());
			this.memoryCell2$post.setValue(this.$inp2$6.getValue());
			this.p9$1.exportValue();
			this.memoryCell2$post.exportValue();
			return true;
		}
	}


class HandlerForinput$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton24.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton24.context;
		this.input$1 = protocol.input$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton24.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.input$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.input$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = input$1.status;
		this.input$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerForp9$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton24.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton24.context;
		this.p9$1 = protocol.p9$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton24.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p9$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p9$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = p9$1.status;
		this.p9$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerFor$inp2$6 extends prdkCore.QueueableHandler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton24.semaphore);

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton24.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.fireTransitionFromState1())
			return true;

		return false;
	}

	flag() {
	}
	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton30 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 2);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton30_State1();

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Initialize states
		 */

		this.state1.initialize(protocol);

		/*
		 * Reach initial state
		 */

		this.state1.reach();

		/*
		 * Return
		 */

		return;
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton30_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton30_Transition2();

		/*
		 * Set observable transitions per port
		 */

								


		/*
		 * Fairness indices for observable transitions
		 */

				

		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton30.state1;
		/*
		 * Set ports 
		 */

		this.$inp15$6 = protocol.$inp15$6;
		this.$outp16$6 = protocol.$outp16$6;
		this.p3$1 = protocol.p3$1;
		this.p7$1 = protocol.p7$1;

		/*
		 * Initialize transitions
		 */

		this.transition2.initialize(protocol);

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Unblock public ports
		 */

		this.p3$1.semaphore.release();
		this.p7$1.semaphore.release();

		/*
		 * Notify masters of private ports
		 */

		this.$inp15$6.kickMaster();
		this.$outp16$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton30_Transition2 extends prdkCore.Transition {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


	}

	//
	// METHODS - PUBLIC
	//

	fire() {

		/*
		 * Lock slaves
		 */

		//automaton13.semaphore.acquireUninterruptibly();
		//automaton18.semaphore.acquireUninterruptibly();

		/*
		 * Check synchronization/data constraint
		 */

		var canFire = this.checkSynchronizationSet() && this.checkDataConstraint();

		/*
		 * Finalize transition
		 */

		if (canFire) {

			/*
			 * Update context
			 */

			this.context.remove(0, 0b00000000000000000000000000000011);

			/*
			 * Unblock ports
			 */

			this.p3$1.status = prdkCore.IO.COMPLETED;
			this.p3$1.semaphore.release();
			this.p7$1.status = prdkCore.IO.COMPLETED;
			this.p7$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();

			/*
			 * Update current states in predictable slaves
			 */

			this.automaton13.state1.reach();
			this.automaton18.state2.reach();
		}

		/*
		 * Unlock slaves
		 */

		//automaton13.semaphore.release();
		//automaton18.semaphore.release();

		/*
		 * Return
		 */

		return canFire;
	}

	initialize(protocol) {

		/*
		 * Set context
		 */

		this.context = protocol.automaton30.context;

		/*
		 * Set ports 
		 */

		this.$inp15$6 = protocol.$inp15$6;
		this.$outp16$6 = protocol.$outp16$6;
		this.p3$1 = protocol.p3$1;
		this.p7$1 = protocol.p7$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton30_Transition2_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton30.state1;

		/*
		 * Set predictable slaves
		 */

		this.automaton13 = protocol.automaton13;
		this.automaton18 = protocol.automaton18;

		/*
		 * Return
		 */

		 return;
	}

	//
	// METHODS - PROTECTED
	//

	checkDataConstraint() {
		return this.dataConstraint.solve();
	}

	checkSynchronizationSet() {
		return true
			&& this.context.contains(0, 0b00000000000000000000000000000011)
			&& this.automaton13.isCurrentState2()			&& this.automaton18.isCurrentState1();
	}
}

	//
	// CLASSES
	//

	class Protocol_d20161214_t173653_998_CurrentWeather_Automaton30_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p3$1 = protocol.variablePool.newOrGetPortVariable(protocol.p3$1);
			this.p7$1 = protocol.variablePool.newOrGetPortVariable(protocol.p7$1);
			this.$inp15$6 = protocol.variablePool.newOrGetPortVariable(protocol.$inp15$6);
			this.$outp16$6 = protocol.variablePool.newOrGetPortVariable(protocol.$outp16$6);
			this.memoryCell2$pre = protocol.variablePool.newOrGetPreVariable(protocol.memoryCell2);
			this.memoryCell4$post = protocol.variablePool.newOrGetPostVariable(protocol.memoryCell4);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.$inp15$6.resetPortBuffer();
			this.$outp16$6.resetPortBuffer();
			this.memoryCell2$pre.importValue();
			this.p7$1.importValue();
			this.$outp16$6.setValue(this.memoryCell2$pre.getValue());
			this.p3$1.setValue(CurrentWeather.GetCoords(this.p7$1.getValue()));
			this.$inp15$6.setValue(this.$outp16$6.getValue());
			this.memoryCell4$post.setValue(this.$inp15$6.getValue());
			this.p3$1.exportValue();
			this.memoryCell4$post.exportValue();
			return true;
		}
	}


class HandlerForp3$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton30.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton30.context;
		this.p3$1 = protocol.p3$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton30.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p3$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p3$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = p3$1.status;
		this.p3$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerForp7$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton30.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton30.context;
		this.p7$1 = protocol.p7$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton30.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p7$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p7$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p7$1.status;
		this.p7$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerFor$inp15$6 extends prdkCore.QueueableHandler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton30.semaphore);

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton30.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.fireTransitionFromState1())
			return true;

		return false;
	}

	flag() {
	}
	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerFor$outp16$6 extends prdkCore.QueueableHandler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton30.semaphore);

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton30.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.fireTransitionFromState1())
			return true;

		return false;
	}

	flag() {
	}
	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton35 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 1);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton35_State1();

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Initialize states
		 */

		this.state1.initialize(protocol);

		/*
		 * Reach initial state
		 */

		this.state1.reach();

		/*
		 * Return
		 */

		return;
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton35_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton35_Transition2();

		/*
		 * Set observable transitions per port
		 */

						


		/*
		 * Fairness indices for observable transitions
		 */

			

		/*
		 * Return
		 */

		return;
	}


	//
	// METHODS
	//

	initialize(protocol) {

		/*
		 * Set successor
		 */

		this.successor = protocol.automaton35.state1;
		/*
		 * Set ports 
		 */

		this.$outp18$6 = protocol.$outp18$6;
		this.output$1 = protocol.output$1;
		this.p13$1 = protocol.p13$1;

		/*
		 * Initialize transitions
		 */

		this.transition2.initialize(protocol);

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Unblock public ports
		 */

		this.output$1.semaphore.release();
		this.p13$1.semaphore.release();

		/*
		 * Notify masters of private ports
		 */

		this.$outp18$6.kickMaster();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t173653_998_CurrentWeather_Automaton35_Transition2 extends prdkCore.Transition {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();


	}

	//
	// METHODS - PUBLIC
	//

	fire() {

		/*
		 * Lock slaves
		 */

		//automaton18.semaphore.acquireUninterruptibly();

		/*
		 * Check synchronization/data constraint
		 */

		var canFire = this.checkSynchronizationSet() && this.checkDataConstraint();

		/*
		 * Finalize transition
		 */

		if (canFire) {

			/*
			 * Update context
			 */

			this.context.remove(0, 0b00000000000000000000000000000011);

			/*
			 * Unblock ports
			 */

			this.output$1.status = prdkCore.IO.COMPLETED;
			this.output$1.semaphore.release();
			this.p13$1.status = prdkCore.IO.COMPLETED;
			this.p13$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();

			/*
			 * Update current states in predictable slaves
			 */

			this.automaton18.state1.reach();
		}

		/*
		 * Unlock slaves
		 */

		//automaton18.semaphore.release();

		/*
		 * Return
		 */

		return canFire;
	}

	initialize(protocol) {

		/*
		 * Set context
		 */

		this.context = protocol.automaton35.context;

		/*
		 * Set ports 
		 */

		this.$outp18$6 = protocol.$outp18$6;
		this.output$1 = protocol.output$1;
		this.p13$1 = protocol.p13$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20161214_t173653_998_CurrentWeather_Automaton35_Transition2_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton35.state1;

		/*
		 * Set predictable slaves
		 */

		this.automaton18 = protocol.automaton18;

		/*
		 * Return
		 */

		 return;
	}

	//
	// METHODS - PROTECTED
	//

	checkDataConstraint() {
		return this.dataConstraint.solve();
	}

	checkSynchronizationSet() {
		return true
			&& this.context.contains(0, 0b00000000000000000000000000000011)
			&& this.automaton18.isCurrentState2();
	}
}

	//
	// CLASSES
	//

	class Protocol_d20161214_t173653_998_CurrentWeather_Automaton35_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.output$1 = protocol.variablePool.newOrGetPortVariable(protocol.output$1);
			this.p13$1 = protocol.variablePool.newOrGetPortVariable(protocol.p13$1);
			this.$outp18$6 = protocol.variablePool.newOrGetPortVariable(protocol.$outp18$6);
			this.memoryCell4$pre = protocol.variablePool.newOrGetPreVariable(protocol.memoryCell4);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.$outp18$6.resetPortBuffer();
			this.memoryCell4$pre.importValue();
			this.p13$1.importValue();
			this.$outp18$6.setValue(this.memoryCell4$pre.getValue());
			this.output$1.setValue(CurrentWeather.FormatWeather(this.p13$1.getValue()));
			this.output$1.exportValue();
			return true;
		}
	}


class HandlerForoutput$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton35.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton35.context;
		this.output$1 = protocol.output$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton35.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.output$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.output$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = output$1.status;
		this.output$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerForp13$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton35.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton35.context;
		this.p13$1 = protocol.p13$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton35.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p13$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p13$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p13$1.status;
		this.p13$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerFor$outp18$6 extends prdkCore.QueueableHandler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton35.semaphore);

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton35.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.fireTransitionFromState1())
			return true;

		return false;
	}

	flag() {
	}
	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

return Protocol_d20161214_t173653_998_CurrentWeather;
}));
