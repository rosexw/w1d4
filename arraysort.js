/* 4. Callbacks - custom sorting
But how about this...
var array = [10, 2, 5, 1, 9];
array.sort();
Uh oh.... why is it [1, 10, 2, 5, 9] ? What's that 10 doing there?
The reason for this is due to the default sorting behavior in JavaScript treats elements as strings, therefore numbers are sorted alphabetically (this is known as "lexigraphical sorting").
Most programmers agree that lexigraphical sorting is a terrible default for JavaScript to have (and the creator of JavaScript agrees and has apologized for it), but the language can't be changed now or else it would break millions of applications that expect the suboptimal behaviour. As JavaScript programmers, we have to be aware of this quirk (and many others) and deal with it.

array.sort sorts it in alphabetical order, called lexigraphical sorting.
the function below sorts the numbers in increasing order.
*/
var array = [10, 2, 5, 1, 9];
array.sort(function(a,b){
	return a - b;
});
console.log(array);
