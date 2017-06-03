//Advanced Sorting
/*
Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

Read about the Array.prototype.sort() function on MDN in order to implement your solution
Did you notice that the sort() function modifies the array being sorted, whereas filter() and map() functions produced new arrays?
*/
/*pseudo code
1. sort in alphabetical order
2. if same name,
	then sort older to younger
*/


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

/* this is from the readings, copied over as an example:
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

students.sort(function(a,b){
	if (a.name < b.name){
		return -1;
	}
	if (a.name > b.name){
		return 1
	}
	return b.age - a.age;
});
console.log(students);



/*
Should sort as:
4 alex 30
3 alex 22
1 bruce 40
2 zoidberg 22
*/
