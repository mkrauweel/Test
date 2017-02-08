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
		global.Protocol_d20170103_t192006_906_ChineseRemainderTheorem = factory();
	}
}(this, function () { 'use strict';


class Protocol_d20170103_t192006_906_ChineseRemainderTheorem {

	//
	// CONSTRUCTORS
	//

	constructor(
		p17$1,
		p2$1,
		p6p13$1$1,
		power$1,
		p14$1,
		p21$1,
		p3p10$1$1,
		result$1
	) {

		/*
		 * Set public ports
		 */

		this.p14$1 = p14$1;
		this.p17$1 = p17$1;
		this.p2$1 = p2$1;
		this.p21$1 = p21$1;
		this.p3p10$1$1 = p3p10$1$1;
		this.p6p13$1$1 = p6p13$1$1;
		this.power$1 = power$1;
		this.result$1 = result$1;

		/*
		 * Set automata
		 */

		this.automaton2 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2();
		this.automaton16 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16();
		this.automaton20 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20();
		this.automaton24 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24();

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
		 * Initialize ports in automaton #2
		 */

		{
			this.p2$1.handler = new HandlerForp2$1(this);
			this.result$1.handler = new HandlerForresult$1(this);
		}


		/*
		 * Initialize ports in automaton #16
		 */

		{
			this.power$1.handler = new HandlerForpower$1(this);
			this.p14$1.handler = new HandlerForp14$1(this);
		}


		/*
		 * Initialize ports in automaton #20
		 */

		{
			this.p17$1.handler = new HandlerForp17$1(this);
			this.p3p10$1$1.handler = new HandlerForp3p10$1$1(this);
		}


		/*
		 * Initialize ports in automaton #24
		 */

		{
			this.p6p13$1$1.handler = new HandlerForp6p13$1$1(this);
			this.p21$1.handler = new HandlerForp21$1(this);
		}

		/*
		 * Initialize automata
		 */

		this.automaton2.initialize(this);
		this.automaton16.initialize(this);
		this.automaton20.initialize(this);
		this.automaton24.initialize(this);
	}

	start() {
		this.automaton2.start();
		this.automaton16.start();
		this.automaton20.start();
		this.automaton24.start();
	}

}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 0);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2_State1();

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

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition1 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2_Transition1();

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

		this.successor = protocol.automaton2.state1;
		/*
		 * Set ports 
		 */

		this.p2$1 = protocol.p2$1;
		this.result$1 = protocol.result$1;

		/*
		 * Initialize transitions
		 */

		this.transition1.initialize(protocol);

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Unblock public ports
		 */

		this.p2$1.semaphore.release();
		this.result$1.semaphore.release();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2_Transition1 extends prdkCore.Transition {

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

			this.p2$1.status = prdkCore.IO.COMPLETED;
			this.p2$1.semaphore.release();
			this.result$1.status = prdkCore.IO.COMPLETED;
			this.result$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();
		}

		/*
		 * Return
		 */

		return canFire;
	}

	initialize(protocol) {

		/*
		 * Set context
		 */

		this.context = protocol.automaton2.context;

		/*
		 * Set ports 
		 */

		this.p2$1 = protocol.p2$1;
		this.result$1 = protocol.result$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2_Transition1_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton2.state1;

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
;
	}
}

	//
	// CLASSES
	//

	class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton2_Transition1_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p2$1 = protocol.variablePool.newOrGetPortVariable(protocol.p2$1);
			this.result$1 = protocol.variablePool.newOrGetPortVariable(protocol.result$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.p2$1.importValue();
			this.result$1.setValue(this.p2$1.getValue());
			this.result$1.exportValue();
			return true;
		}
	}


class HandlerForp2$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton2.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton2.context;
		this.p2$1 = protocol.p2$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton2.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p2$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p2$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p2$1.status;
		this.p2$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition1.fire();
	}
}

class HandlerForresult$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton2.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton2.context;
		this.result$1 = protocol.result$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton2.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.result$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.result$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = result$1.status;
		this.result$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition1.fire();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 0);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16_State1();

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

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16_Transition2();

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

		this.successor = protocol.automaton16.state1;
		/*
		 * Set ports 
		 */

		this.p14$1 = protocol.p14$1;
		this.power$1 = protocol.power$1;

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

		this.p14$1.semaphore.release();
		this.power$1.semaphore.release();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16_Transition2 extends prdkCore.Transition {

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

			this.p14$1.status = prdkCore.IO.COMPLETED;
			this.p14$1.semaphore.release();
			this.power$1.status = prdkCore.IO.COMPLETED;
			this.power$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();
		}

		/*
		 * Return
		 */

		return canFire;
	}

	initialize(protocol) {

		/*
		 * Set context
		 */

		this.context = protocol.automaton16.context;

		/*
		 * Set ports 
		 */

		this.p14$1 = protocol.p14$1;
		this.power$1 = protocol.power$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16_Transition2_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton16.state1;

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
;
	}
}

	//
	// CLASSES
	//

	class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton16_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p14$1 = protocol.variablePool.newOrGetPortVariable(protocol.p14$1);
			this.power$1 = protocol.variablePool.newOrGetPortVariable(protocol.power$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.power$1.importValue();
			this.p14$1.setValue(this.power$1.getValue());
			this.p14$1.exportValue();
			return true;
		}
	}


class HandlerForp14$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton16.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton16.context;
		this.p14$1 = protocol.p14$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton16.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p14$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p14$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = p14$1.status;
		this.p14$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerForpower$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton16.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton16.context;
		this.power$1 = protocol.power$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton16.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.power$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.power$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = power$1.status;
		this.power$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 0);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20_State1();

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

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20_Transition2();

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

		this.successor = protocol.automaton20.state1;
		/*
		 * Set ports 
		 */

		this.p17$1 = protocol.p17$1;
		this.p3p10$1$1 = protocol.p3p10$1$1;

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

		this.p17$1.semaphore.release();
		this.p3p10$1$1.semaphore.release();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20_Transition2 extends prdkCore.Transition {

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

			this.p17$1.status = prdkCore.IO.COMPLETED;
			this.p17$1.semaphore.release();
			this.p3p10$1$1.status = prdkCore.IO.COMPLETED;
			this.p3p10$1$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();
		}

		/*
		 * Return
		 */

		return canFire;
	}

	initialize(protocol) {

		/*
		 * Set context
		 */

		this.context = protocol.automaton20.context;

		/*
		 * Set ports 
		 */

		this.p17$1 = protocol.p17$1;
		this.p3p10$1$1 = protocol.p3p10$1$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20_Transition2_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton20.state1;

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
;
	}
}

	//
	// CLASSES
	//

	class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton20_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p17$1 = protocol.variablePool.newOrGetPortVariable(protocol.p17$1);
			this.p3p10$1$1 = protocol.variablePool.newOrGetPortVariable(protocol.p3p10$1$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.p17$1.importValue();
			this.p3p10$1$1.setValue(this.p17$1.getValue());
			this.p3p10$1$1.exportValue();
			return true;
		}
	}


class HandlerForp17$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton20.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton20.context;
		this.p17$1 = protocol.p17$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton20.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p17$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p17$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p17$1.status;
		this.p17$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerForp3p10$1$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton20.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton20.context;
		this.p3p10$1$1 = protocol.p3p10$1$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton20.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p3p10$1$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p3p10$1$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = p3p10$1$1.status;
		this.p3p10$1$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 0);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24_State1();

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

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24_Transition2();

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

		this.p21$1 = protocol.p21$1;
		this.p6p13$1$1 = protocol.p6p13$1$1;

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

		this.p21$1.semaphore.release();
		this.p6p13$1$1.semaphore.release();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24_Transition2 extends prdkCore.Transition {

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

			this.p21$1.status = prdkCore.IO.COMPLETED;
			this.p21$1.semaphore.release();
			this.p6p13$1$1.status = prdkCore.IO.COMPLETED;
			this.p6p13$1$1.semaphore.release();

			/*
			 * Update current state
			 */

			this.target.reach();
		}

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

		this.p21$1 = protocol.p21$1;
		this.p6p13$1$1 = protocol.p6p13$1$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24_Transition2_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton24.state1;

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
;
	}
}

	//
	// CLASSES
	//

	class Protocol_d20170103_t192006_906_ChineseRemainderTheorem_Automaton24_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p21$1 = protocol.variablePool.newOrGetPortVariable(protocol.p21$1);
			this.p6p13$1$1 = protocol.variablePool.newOrGetPortVariable(protocol.p6p13$1$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.p6p13$1$1.importValue();
			this.p21$1.setValue(this.p6p13$1$1.getValue());
			this.p21$1.exportValue();
			return true;
		}
	}


class HandlerForp21$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton24.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton24.context;
		this.p21$1 = protocol.p21$1;

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
		if (this.p21$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p21$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = p21$1.status;
		this.p21$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000010);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

class HandlerForp6p13$1$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton24.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton24.context;
		this.p6p13$1$1 = protocol.p6p13$1$1;

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
		if (this.p6p13$1$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p6p13$1$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p6p13$1$1.status;
		this.p6p13$1$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition2.fire();
	}
}

return Protocol_d20170103_t192006_906_ChineseRemainderTheorem;
}));
