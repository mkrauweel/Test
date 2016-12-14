/**
 * Firefox Web Workers Example v1.4.0
 *
 * http://pmav.eu/stuff/javascript-webworkers
 *
 * This example calculates a^b % c using N Web Wokers.
 *
 * pmav, 2009-2010
 */

(function () {

    MAIN = {

        workersNumber : 0,  // Total number of Web Workers (dynamic).
        //workers: [],        // Web Workers reference.
        //workersEnded : 0,   // Number of terminated Web Workers.

        base : null,
        power : null,
        mod : null,

        startTime : null,   // Current test start time.
        results : null,     // Current test results (for debugging).
        testNumber : 1,     // Current test number.

        benchmark : {       // Benchmark stuff.

            mode : false,
            currentTest : 0,
            currentRun: 0,
            runResults : [],
            finalResults : [],

            tests : [
            {
                workers: 1, 
                runs: 10,
                data : {
                    base : 2,
                    power : 2048000000, // 2 048 000 000
                    mod : 97777
                }
            },

            {
                workers: 2,
                runs: 10,
                data : {
                    base : 2,
                    power : 2048000000,
                    mod : 97777
                }
            },

            {
                workers: 4,
                runs: 10,
                data : {
                    base : 2,
                    power : 2048000000,
                    mod : 97777
                }
            },

            {
                workers: 8,
                runs: 10,
                data : {
                    base : 2,
                    power : 2048000000,
                    mod : 97777
                }
            },

            {
                workers: 16,
                runs: 10,
                data : {
                    base : 2,
                    power : 2048000000,
                    mod : 97777
                }
            }
            ]
        },

        setProtocol : function(protocol)
        {
        	this.protocol = protocol;
        	this.protocol.start();  
        },

        /**
         * MAIN.run(int, int, int, int)
         *
         * Main code function (this will run only once per test).
         */
        run : function(workersNumber, base, power, mod) {
            
            try {                
                this.workersNumber = workersNumber;
                this.base = base;
                this.power = power;
                this.mod = mod;

                this.startTime = new Date();
                
                //MAIN.power = 1024;       
    			this.protocol.power$1.put(MAIN.power);
    			this.protocol.result$1.get().then((result) => {
    				   				
    				var time = ((new Date) - MAIN.startTime);

    				// Output run results.
    				var output = MAIN.testNumber + ") " + MAIN.workersNumber + " Worker" + ( MAIN.workersNumber === 1 ? "" : "s" ) + ", Test: "+MAIN.base+"^"+MAIN.power+" mod "+MAIN.mod+" = "+result+", "+ time + " ms";

    				console.log(output);
    				if (MAIN.benchmark.mode) {
    					UTIL.logBenchmark(output);
    				} else {
    					UTIL.log(output);
    				}

    				MAIN.testNumber += 1;

    				if (MAIN.benchmark.mode) {
    					MAIN.benchmark.runResults.push(time);
    					MAIN.runBenchmark();
    				} else {
    					JQ.callback();
    				}
    				
    			});
                
            } catch (e) {
                alert(e);
            }
        },


        /**
         * MAIN.benchmark();
         *
         * Run several tests and output some useful info.
         */
        runBenchmark : function () {
            var test;

            if (this.benchmark.currentTest == 0) {
        
                // Benchmark start.
                this.benchmark.mode = true;
            }

            while (this.benchmark.tests[this.benchmark.currentTest].runs == 0) {
                // Skip current test.
                this.benchmark.currentTest++;
            }

            if (this.benchmark.currentRun < this.benchmark.tests[this.benchmark.currentTest].runs) {
        
                // Still have some runs to do.
                test = this.benchmark.tests[this.benchmark.currentTest];
                this.run(test.workers, test.data.base, test.data.power, test.data.mod);
                this.benchmark.currentRun++;

            } else {

                // Next test?
                this.benchmark.finalResults.push(UTIL.average(this.benchmark.runResults));
                this.benchmark.currentTest++;

                // Reset run.
                this.benchmark.currentRun = 0;
                this.benchmark.runResults = [];

                if (this.benchmark.currentTest < this.benchmark.tests.length) {
          
                    // Next test!
                    test = this.benchmark.tests[this.benchmark.currentTest];
                    this.run(test.workers, test.data.base, test.data.power, test.data.mod);
                    this.benchmark.currentRun++;

                } else {
          
                    // Benchmark end.
                    UTIL.logBenchmark("");

                    var i, s;
                    for (i = 0; i < this.benchmark.finalResults.length; i++) {
                        if (i == 0) {
                            s = "Standart Test, 100%";
                        } else {
                            s = Math.round(((this.benchmark.finalResults[i] / this.benchmark.finalResults[0]) * 100)) + "%";
                        }

                        UTIL.logBenchmark("Benchmark Group #"+(i+1)+" average: "+this.benchmark.finalResults[i]+" ms, "+this.benchmark.tests[i].workers+ " Worker" + ( this.benchmark.tests[i].workers === 1 ? "" : "s" ) + " [" + s + "]");
                    }

                    // Reset test.
                    this.benchmark.currentTest = 0;
                    this.benchmark.currentRun = 0;
                    this.benchmark.finalResults = [];
                    this.benchmark.mode = false;
          
                    JQ.callback();
                }
            }
        },

        /**
         * MAIN.error(object)
         *
         * Handles worker errors (in a amazing way...).
         */
        error : function(error) {
            alert("Worker error: " + error);
        }
    
    }

    /**
     * UTIL
     *
     * Auxiliar code for this example.
     */
    UTIL = {

        logDom : null,
        logBenchmarkDom : null,

        log : function(loggingText) {
            if (this.logDom === null) {
                this.logDom = document.getElementById("log");
            }
      
            this.logDom.innerHTML = loggingText + "<br>" + this.logDom.innerHTML;
        },


        logBenchmark : function(loggingText) {
            if (this.logBenchmarkDom === null) {
                this.logBenchmarkDom = document.getElementById("benchmark-log");
            }

            this.logBenchmarkDom.innerHTML = loggingText + "<br>" + this.logBenchmarkDom.innerHTML;
        },


        average : function(values) {
            var i, sum = 0.0;

            for (i = 0; i < values.length; i++) {
                sum += values[i];
            }

            return Math.floor(sum / values.length);
        }
    }


}());
