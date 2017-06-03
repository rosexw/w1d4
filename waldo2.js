/* 2. Where's Waldo using forEach
use array forEach, array.prototype.forEach()
Exercise - Array forEach
A very common implementation of callback functions is with forEach which uses callbacks to allow us to easily iterate through the elements of an array.

Read about iterating through elements of an array using JavaScript's Array.prototype.forEach() method.

Refactor the function findWaldo to use the forEach() method instead of a for loop.
*/


// The second argument/parameter is expected to be a function

// first way to findWaldo
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//     	var num = arr[i];
//     	actionWhenFound(i);   // execute callback
//     }
//   }
// }

//second way to findWaldo, using Array.prototype.forEach()
/* Example given on Mozilla
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
*/
function findWaldo(array, found) {
	array.forEach(function(item, index) {
		if (item === "Waldo"){
			actionWhenFound(index);
		}
	}, this);
}

function actionWhenFound(num) {
  console.log("Found Waldo at index "+(num+1)+"!");
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], this.actionWhenFound);
