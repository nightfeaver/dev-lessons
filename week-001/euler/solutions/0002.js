/* You shouldn't need any additional tools for this problem.  As a brief reminder,
 * to check if a number is even, you can write:
 *
 *     if( num % 2 === 0 ){
 *     }
 *
 * The one thing that might trip you up is that you will have to swap values from one
 * variable to another, e.g.:
 *
 *     var a = 10;
 *     var b = 20;
 *
 *     a = b;
 *     // a and b are now both 20
 */


module.exports = function(){
	var sum = 2;
	var first = 1;
	var second = 2;
	var counter = 3;
	while (counter<4000001) {
		if ((first+second) % 2 === 0){
			sum+=counter;
			first=second;
			second=counter;
			counter=first+second;
			console.log(sum);
		} else {
			first=second;
			second=counter;
			counter=first+second;
		}

	}


	return sum;
	console.log(sum);
};