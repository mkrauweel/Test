'use strict';

class ChineseRemainderTheorem
{  
	/*static DividePayload(pIn, pOut, base, modulo, workersNumber) 
	{
		var promises = [];
		pIn.get().then((power) => {
			// Divide work by Workers.
			var powers = ChineseRemainderTheorem._powerDivision(power, workersNumber);
			
			for (var i = 0; i < powers.length; i++) {
				var payload = { base: base, power: powers[i], mod: modulo };
				promises.push(pOut.put(payload));
			}

			return Promise.all(promises);
		}).then(() => {
			DividePayload(pIn, pOut, base, modulo, workersNumber);
		})
	}
	
	static MergePayload(pIn, pOut, base, modulo, workersNumber) 
	{
		var promises = [];
		var payload;
        var result = 1;
                
        for (var i = 0; i < workersNumber; i++) {
			promises.push(pIn.get());
		}

		Promise.all(promises).then((payloads) => {
			for (var y = 0; y < payloads.length; y++) {
				payload = payloads[y];
				//result = (result * payload.power) % payload.mod;
				result = result + payload.power;
			}
			
			return pOut.put(result);
		}).then(() => {
			MergePayload(pIn, pOut, base, modulo, workersNumber);
		};
	}

	static Compute(pIn, pOut, index)
	{
    	var payload = yield pIn.get(); 
		
		pIn.get().then((payload) => {
			payload.power = ChineseRemainderTheorem._power(payload.base, payload.power, payload.mod);
			return pOut.put(payload);
		}).then(() => {
			ChineseRemainderTheorem.Power(pIn, pOut, index);
		});
	}*/

	static* DividePayload(pIn, pOut, base, modulo, workersNumber)
	{   
		var power = yield pIn.get();
						      
        // Divide work by Workers.
        var powers = ChineseRemainderTheorem._powerDivision(power, workersNumber);
             
        for (var i = 0; i < powers.length; i++) {
        	var payload = { base: base, power: powers[i], mod: modulo };
            yield pOut.put(payload);
        }
        
        yield* ChineseRemainderTheorem.DividePayload(pIn, pOut, base, modulo, workersNumber);
	}
	
	static* MergePayload(pIn, pOut, workersNumber)
	{
		var payload;
        var result = 1;
                
        for (var i = 0; i < workersNumber; i++) {
        	payload = yield pIn.get();
        	result = (result * payload.power) % payload.mod;
        	//result = result + payload.power;
        }
        
        yield pOut.put(result);
        
        yield* ChineseRemainderTheorem.MergePayload(pIn, pOut, workersNumber);
	}
			
    static* Compute(pIn, pOut, index)
	{
    	var payload = yield pIn.get(); 
    		
    	payload.power = ChineseRemainderTheorem._power(payload.base, payload.power, payload.mod);
    	
		yield pOut.put(payload);
			 
		yield* ChineseRemainderTheorem.Power(pIn, pOut, index);
	}
    
    /**
     * Return base^power % mod.
     */
    static _power(base, power, mod) {
    	    	
    	//return 1;
    	
        if (power == 0) {
            return 1;
        }
        
        var i = 0, total = base;
        power--;

        for (i = 0; i < power; i++) {
            total = (total * base) % mod;
        }

        return total;
    }
    
    /**
     * Return p splited into n slots.
     * Example:
     *  p = 13
     *  n = 3
     *  Return [5, 4, 4]
     */
    static _powerDivision(p, n) {
    	
    	/*var i;    	 
        var a = [];
     
        for (i = 0 ; i < n; i++) {
            a[i] = i;
        }

        return a;
        */
    	var e = 0, i = 0, d = 0;
        var a = [];

        e = Math.floor(p/n);

        for (i = 0 ; i < n; i++) {
            a[i] = e;
        }

        if ((e * n) < p) {
            d = p - (e * n);
            for (i = 0 ; i < d; i++) {
                a[i] += 1;
            }
        }

        return a;
    }
    
    
}

if (typeof module !== 'undefined' && module && module.exports) {
	module.exports = ChineseRemainderTheorem;
}