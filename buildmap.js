function map (arr, func) {
	var newArray = [];
	arr.forEach(function(entry){
		var mappedEntry = func(entry);
		newArray.push(mappedEntry);
//	}, this);
	});
	return newArray;
}

var words = ["ground", "control", "to", "major", "tom"];
//result: [6, 7, 2, 5, 3]

var result = map(words, function(word) {
  return word.length;
});


console.log('Result: ', result);


// var numbers = [1, 2, 3];

// map(numbers, function(number) {
// 	return number * 2;
// });


//the map function calls the function func on each entry of the array
//func is the function in line 11-13.
//And we want to print each entry of the array from func
//WE NEED TO CALL FUNC