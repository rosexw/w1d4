/* w1d4
1. Callbacks - Introduction - Where's Waldo?
Exercise - Callback Arguments
Did you know that we can pass results via callback functions?

Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)
Once you have this working, remember to commit your changes using Git. A good commit message should be concise and descriptive of the changes you have made. An example commit message: Print the index of Waldo when found.
*/

// The second argument/parameter is expected to be a function

// first way to findWaldo
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
    	//var num = arr[i];
    	actionWhenFound(i);   // execute callback
    }
  }
}

function actionWhenFound(num) {
  console.log("Found Waldo at index "+num+"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*
My Thoughts/pseudocode
1. call the function findWaldo ()
2. use for loop to go through array of where Waldo is
				and
3. once we locate [i], return [i]'s position
	a. if i = 1, continue for loop
	b. if i = 2, continue for loop
	c. if i = 3, stop here and return [i]
4. print console.log("Found Waldo at") position [i]
Result should print: "Found Waldo at index 3!"
*/
