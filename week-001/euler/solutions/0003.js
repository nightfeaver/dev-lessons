/* If you can't figure this one out after a little while, ask for help.
 *
 * This one is a lot trickier than the previous two.  There are several ways to go about
 * doing this.  If you are interested in learning a whole lot about prime numbers, you can
 * go ahead and create what is called a "prime sieve", which is the fastest way to
 * generate prime numbers.  Your sieve will be very useful in future problems from project
 * euler, but it is overkill for this exact problem.
 *
 * I'll give you a few hints to get you started:
 *
 * The largest possible prime factor of any number, n, is sqrt( n ).  To find the square
 * root of a number in JavaScript:
 *
 *     var sqrt = Math.sqrt( num );
 *
 * All prime numbers other than 2 are odd
 *
 * Notice that my loop starts at 3, and the +=2 at the end increments i by 2 each time,
 * instead of 1 like you're used to.  This means that i becomes 5, 7, 9, etc...
 */

module.exports = function(){
	var value;

	// declare and init
	var ceiling;
	ceiling = 2000001;
	var primeChecker;
	primeChecker = 2;
	var holder;
	holder = [];
	var mainCount = 3;
	var target = 600851475143;
	var primeFactor=2000000;

// load up the array with zeros
// for holder, 0 = empty, 1 = non prime, 2 = prime



	for (i = 0; i < ceiling; i++) {
		holder[i] = 0;
	}

// get rid of evens
	for (i = primeChecker; i*primeChecker < ceiling; i++) {
		holder[i * primeChecker] = "Not Prime"
	}


// Loop through 2 million numbers to find primes

	while (mainCount < ceiling) {

		// is the next number a prime
		if (holder[primeChecker + 1] === 0)
		// yes
		// store prime
		{
			var nextPrime= primeChecker+1;
			holder[nextPrime] = nextPrime;
			// remove multiples

			for (i = 2; i*(nextPrime) < ceiling; i++) {
				holder[i*nextPrime] = "Not Prime";
			}
			// update counters
			mainCount++;
			primeChecker = primeChecker + 1;
		}
		else {
			// updae counters
			mainCount++;
			primeChecker = primeChecker + 1;
		}
		//for (i = 2; i < ceiling; i++) if (holder[i] === 2) {
		//    console.log(i)
		//}
	}

	while(primeFactor>1) {
		if(target % holder[primeFactor] === 0) {value=primeFactor;break
		} else {primeFactor--}
	}

	return value;
};