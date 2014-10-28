/**
 * Created by hampsonj on 28/10/2014.
 */

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


var number = 600851475143;
var value;
var counter;
counter = Math.sqrt(number);
alert(counter);
while (number % counter !== 0) {
    console.log(counter);
    counter--;
}
value=counter;
alert(value);
