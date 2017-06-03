/* 3. Callbacks - anonymous functions and array iterators
Array Mapping Challenge
Related to filter, is Array.prototype.map.
If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.
Complete the following code for the assertion to pass. The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).
*/
//pythagorean theorem, find z
//z^2 = x^2 + y^2 : is a fundamental relation in Euclidean geometry among the three sides of a right triangle. It states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides a, b and c, often called the "Pythagorean equation":[1]

var input = [
  { x: 3, y: 4 }, //[0]
  { x: 12, y: 5 }, //[1]
  { x: 8, y: 15 } //[2]
];

//for loop to go mark each {object} as position [i] in array
//result = sqrt of (x^2 + y^2)
//Math.pow(x,y) returns x with the power of y
//so Math.pow(x,2) returns x squared
//and Math.pow(y,2) returns y squared
//Math.sqrt(done) returns the square root of done
//result = Math.sqrt((Math.pow(x,2)+Math.pow(y,2)))

var result = input.map(function(triangle, index){
	//triangle.forEach(function (x, y){
	//console.log(triangle, triangle.x, triangle.y);
	return(Math.sqrt((Math.pow(triangle.x,2)+Math.pow(triangle.y,2))))
	});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
