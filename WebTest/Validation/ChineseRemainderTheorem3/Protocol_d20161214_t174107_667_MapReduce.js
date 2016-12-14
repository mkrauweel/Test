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
		global.Protocol_d20161214_t174107_667_MapReduce = factory();
	}
}(this, function () { 'use strict';


class Protocol_d20161214_t174107_667_MapReduce {

	//
	// CONSTRUCTORS
	//

	constructor(
		p14$1,
		p18$1,
		p2$1,
		p28$1,
		p6$1,
		power$1,
		p11$1,
		p15$1,
		p23$1,
		p25$1,
		p3$1,
		result$1
	) {

		/*
		 * Set public ports
		 */

		this.p11$1 = p11$1;
		this.p14$1 = p14$1;
		this.p15$1 = p15$1;
		this.p18$1 = p18$1;
		this.p2$1 = p2$1;
		this.p23$1 = p23$1;
		this.p25$1 = p25$1;
		this.p28$1 = p28$1;
		this.p3$1 = p3$1;
		this.p6$1 = p6$1;
		this.power$1 = power$1;
		this.result$1 = result$1;

		/*
		 * Set automata
		 */

		this.automaton2 = new Protocol_d20161214_t174107_667_MapReduce_Automaton2();
		this.automaton24 = new Protocol_d20161214_t174107_667_MapReduce_Automaton24();
		this.automaton32 = new Protocol_d20161214_t174107_667_MapReduce_Automaton32();
		this.automaton40 = new Protocol_d20161214_t174107_667_MapReduce_Automaton40();

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
		 * Initialize ports in automaton #24
		 */

		{
			this.power$1.handler = new HandlerForpower$1(this);
			this.p15$1.handler = new HandlerForp15$1(this);
		}


		/*
		 * Initialize ports in automaton #32
		 */

		{
			this.p18$1.handler = new HandlerForp18$1(this);
			this.p11$1.handler = new HandlerForp11$1(this);
			this.p25$1.handler = new HandlerForp25$1(this);
			this.p3$1.handler = new HandlerForp3$1(this);
		}


		/*
		 * Initialize ports in automaton #40
		 */

		{
			this.p14$1.handler = new HandlerForp14$1(this);
			this.p28$1.handler = new HandlerForp28$1(this);
			this.p6$1.handler = new HandlerForp6$1(this);
			this.p23$1.handler = new HandlerForp23$1(this);
		}

		/*
		 * Initialize automata
		 */

		this.automaton2.initialize(this);
		this.automaton24.initialize(this);
		this.automaton32.initialize(this);
		this.automaton40.initialize(this);
	}

	start() {
		this.automaton2.start();
		this.automaton24.start();
		this.automaton32.start();
		this.automaton40.start();
	}

}

class Protocol_d20161214_t174107_667_MapReduce_Automaton2 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 0);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t174107_667_MapReduce_Automaton2_State1();

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton2_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition1 = new Protocol_d20161214_t174107_667_MapReduce_Automaton2_Transition1();

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton2_Transition1 extends prdkCore.Transition {

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

		this.dataConstraint = new Protocol_d20161214_t174107_667_MapReduce_Automaton2_Transition1_DataConstraint(protocol, this);

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

	class Protocol_d20161214_t174107_667_MapReduce_Automaton2_Transition1_DataConstraint {

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton24 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(2, 0);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t174107_667_MapReduce_Automaton24_State1();

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton24_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition2 = new Protocol_d20161214_t174107_667_MapReduce_Automaton24_Transition2();

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

		this.p15$1 = protocol.p15$1;
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

		this.p15$1.semaphore.release();
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

class Protocol_d20161214_t174107_667_MapReduce_Automaton24_Transition2 extends prdkCore.Transition {

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

			this.p15$1.status = prdkCore.IO.COMPLETED;
			this.p15$1.semaphore.release();
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

		this.context = protocol.automaton24.context;

		/*
		 * Set ports 
		 */

		this.p15$1 = protocol.p15$1;
		this.power$1 = protocol.power$1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20161214_t174107_667_MapReduce_Automaton24_Transition2_DataConstraint(protocol, this);

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

	class Protocol_d20161214_t174107_667_MapReduce_Automaton24_Transition2_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p15$1 = protocol.variablePool.newOrGetPortVariable(protocol.p15$1);
			this.power$1 = protocol.variablePool.newOrGetPortVariable(protocol.power$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.power$1.importValue();
			this.p15$1.setValue(this.power$1.getValue());
			this.p15$1.exportValue();
			return true;
		}
	}


class HandlerForp15$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton24.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton24.context;
		this.p15$1 = protocol.p15$1;

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
		if (this.p15$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p15$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000010);
		var status = p15$1.status;
		this.p15$1.status = null;
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
		super(protocol.automaton24.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton24.context;
		this.power$1 = protocol.power$1;

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton32 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(4, 0);

		/*
		 * Queues
		 */

		this.queue1 = new prdkCore.SingleReaderQueue(3);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t174107_667_MapReduce_Automaton32_State1();

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton32_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition7 = new Protocol_d20161214_t174107_667_MapReduce_Automaton32_Transition7();

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

		this.successor = protocol.automaton32.state1;
		/*
		 * Set ports 
		 */

		this.p18$1 = protocol.p18$1;

		/*
		 * Initialize transitions
		 */

		this.transition7.initialize(protocol);

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Unblock public ports
		 */

		this.p18$1.semaphore.release();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t174107_667_MapReduce_Automaton32_Transition7 extends prdkCore.Transition {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Queues and their public ports
		 */

		this.queue1 = null;
		this.queue1Port = null;


	}

	//
	// METHODS - PUBLIC
	//

	fire() {

		/*
		 * Dequeue
		 */

		if (!this.queue1.canPoll())
			return false;

		var queue1Item = this.queue1.peek();
		this.queue1Port = queue1Item.port;

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

			this.context.remove(0, 0b00000000000000000000000000000001);

			/*
			 * Dequeue
			 */

			this.queue1.poll();

			/*
			 * Unblock ports
			 */

			this.p18$1.status = prdkCore.IO.COMPLETED;
			this.p18$1.semaphore.release();

			this.queue1Port.status = prdkCore.IO.COMPLETED;
			this.queue1Port.semaphore.release();

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

		this.context = protocol.automaton32.context;

		/*
		 * Set ports 
		 */

		this.p18$1 = protocol.p18$1;

		/*
		 * Queues
		 */

		this.queue1 = protocol.automaton32.queue1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20161214_t174107_667_MapReduce_Automaton32_Transition7_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton32.state1;

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
			&& this.context.contains(0, 0b00000000000000000000000000000001)
;
	}
}

	//
	// CLASSES
	//

	class Protocol_d20161214_t174107_667_MapReduce_Automaton32_Transition7_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p18$1 = protocol.variablePool.newOrGetPortVariable(protocol.p18$1);
			this.p3$1 = protocol.variablePool.newOrGetPortVariable(protocol.p3$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.p3$1.setPort(this.transition.queue1Port);
			this.p18$1.importValue();
			this.p3$1.setValue(this.p18$1.getValue());
			this.p3$1.exportValue();
			return true;
		}
	}


class HandlerForp11$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton32.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton32.context;
		this.p11$1 = protocol.p11$1;

		/*
		 *
		 */

		this.queue1 = protocol.automaton32.queue1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton32.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p11$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p11$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		throw new UnsupportedOperationException();
	}

	flag() {
		this.queue1.offer(new prdkCore.SingleReaderQueueItem(this.p11$1, null, null));
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class HandlerForp18$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton32.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton32.context;
		this.p18$1 = protocol.p18$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton32.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p18$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p18$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p18$1.status;
		this.p18$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class HandlerForp25$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton32.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton32.context;
		this.p25$1 = protocol.p25$1;

		/*
		 *
		 */

		this.queue1 = protocol.automaton32.queue1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton32.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p25$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p25$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		throw new UnsupportedOperationException();
	}

	flag() {
		this.queue1.offer(new prdkCore.SingleReaderQueueItem(this.p25$1, null, null));
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class HandlerForp3$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton32.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton32.context;
		this.p3$1 = protocol.p3$1;

		/*
		 *
		 */

		this.queue1 = protocol.automaton32.queue1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton32.state1;

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
		throw new UnsupportedOperationException();
	}

	flag() {
		this.queue1.offer(new prdkCore.SingleReaderQueueItem(this.p3$1, null, null));
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class Protocol_d20161214_t174107_667_MapReduce_Automaton40 extends prdkCore.Automaton {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super(4, 0);

		/*
		 * Queues
		 */

		this.queue1 = new prdkCore.SingleReaderQueue(3);


		/*
		 * Set states
		 */

		this.state1 = new Protocol_d20161214_t174107_667_MapReduce_Automaton40_State1();

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

class Protocol_d20161214_t174107_667_MapReduce_Automaton40_State1 extends prdkCore.State {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Set transitions
		 */

		this.transition7 = new Protocol_d20161214_t174107_667_MapReduce_Automaton40_Transition7();

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

		this.successor = protocol.automaton40.state1;
		/*
		 * Set ports 
		 */

		this.p23$1 = protocol.p23$1;

		/*
		 * Initialize transitions
		 */

		this.transition7.initialize(protocol);

		/*
		 * Return
		 */

		return;
	}

	reach() {

		/*
		 * Unblock public ports
		 */

		this.p23$1.semaphore.release();

		/*
		 * Return
		 */

		return;
	}

	reachSuccessor() {
		this.successor.reach();
	}
}

class Protocol_d20161214_t174107_667_MapReduce_Automaton40_Transition7 extends prdkCore.Transition {

	//
	// CONSTRUCTORS
	//

	constructor() {
		super();

		/*
		 * Queues and their public ports
		 */

		this.queue1 = null;
		this.queue1Port = null;


	}

	//
	// METHODS - PUBLIC
	//

	fire() {

		/*
		 * Dequeue
		 */

		if (!this.queue1.canPoll())
			return false;

		var queue1Item = this.queue1.peek();
		this.queue1Port = queue1Item.port;

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

			this.context.remove(0, 0b00000000000000000000000000000001);

			/*
			 * Dequeue
			 */

			this.queue1.poll();

			/*
			 * Unblock ports
			 */

			this.p23$1.status = prdkCore.IO.COMPLETED;
			this.p23$1.semaphore.release();

			this.queue1Port.status = prdkCore.IO.COMPLETED;
			this.queue1Port.semaphore.release();

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

		this.context = protocol.automaton40.context;

		/*
		 * Set ports 
		 */

		this.p23$1 = protocol.p23$1;

		/*
		 * Queues
		 */

		this.queue1 = protocol.automaton40.queue1;

		/*
		 * Set data constraint and target
		 */

		this.dataConstraint = new Protocol_d20161214_t174107_667_MapReduce_Automaton40_Transition7_DataConstraint(protocol, this);

		/*
		 * Set target
		 */

		this.target = protocol.automaton40.state1;

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
			&& this.context.contains(0, 0b00000000000000000000000000000001)
;
	}
}

	//
	// CLASSES
	//

	class Protocol_d20161214_t174107_667_MapReduce_Automaton40_Transition7_DataConstraint {

		//
		// CONSTRUCTORS
		//

		constructor(protocol, transition) {

			this.transition = transition;

			/*
			 * Set variables
			 */

			this.p23$1 = protocol.variablePool.newOrGetPortVariable(protocol.p23$1);
			this.p6$1 = protocol.variablePool.newOrGetPortVariable(protocol.p6$1);

			/*
			 * Return
			 */

			return;
		}

		solve() {
			this.p6$1.setPort(this.transition.queue1Port);
			this.p6$1.importValue();
			this.p23$1.setValue(this.p6$1.getValue());
			this.p23$1.exportValue();
			return true;
		}
	}


class HandlerForp14$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton40.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton40.context;
		this.p14$1 = protocol.p14$1;

		/*
		 *
		 */

		this.queue1 = protocol.automaton40.queue1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton40.state1;

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
		throw new UnsupportedOperationException();
	}

	flag() {
		this.queue1.offer(new prdkCore.SingleReaderQueueItem(this.p14$1, null, null));
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class HandlerForp23$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton40.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton40.context;
		this.p23$1 = protocol.p23$1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton40.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p23$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p23$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		this.context.remove(0, 0b00000000000000000000000000000001);
		var status = p23$1.status;
		this.p23$1.status = null;
		return status == prdkCore.IO.COMPLETED;
	}

	flag() {
		this.context.add(0, 0b00000000000000000000000000000001);
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class HandlerForp28$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton40.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton40.context;
		this.p28$1 = protocol.p28$1;

		/*
		 *
		 */

		this.queue1 = protocol.automaton40.queue1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton40.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p28$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p28$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		throw new UnsupportedOperationException();
	}

	flag() {
		this.queue1.offer(new prdkCore.SingleReaderQueueItem(this.p28$1, null, null));
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

class HandlerForp6$1 extends prdkCore.Handler {

	//
	// CONSTRUCTORS
	//

	constructor(protocol) {
		super(protocol.automaton40.semaphore);

		/*
		 * Set context and port
		 */

		this.context = protocol.automaton40.context;
		this.p6$1 = protocol.p6$1;

		/*
		 *
		 */

		this.queue1 = protocol.automaton40.queue1;

		/*
		 * Set states
		 */

		this.state1 = protocol.automaton40.state1;

		/*
		 * Return
		 */

		return;
	}

	//
	// METHODS
	//

	call() {
		if (this.p6$1.status == prdkCore.IO.COMPLETED)
			return true;

		if (this.fireTransitionFromState1())
			return true;

		this.p6$1.semaphore.drainPermits();
		return false;
	}


	cancel() {
		throw new UnsupportedOperationException();
	}

	flag() {
		this.queue1.offer(new prdkCore.SingleReaderQueueItem(this.p6$1, null, null));
	}




	fireTransitionFromState1() {
		return this.state1.transition7.fire();
	}
}

return Protocol_d20161214_t174107_667_MapReduce;
}));
