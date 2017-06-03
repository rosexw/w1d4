/* 6 closure instructions - no real activity here, but just to understand how closures work */

/*Closures example*/
var outer = function() {
  var x = 10;

  var inner = function() {
    console.log("The value of x is: " + x);
  }
  return inner;
};

var foo = outer();
foo();

/*
What will foo() print? Will x be 10, undefined or something else? What would make sense to you?

Try it in the REPL. You'll discover that it prints The value of x is: 10. Why? Because the above code is executed in the following manner.

Function outer is invoked: outer().
outer assigns the value 10 to the variable x.
outer defines a function and assigns it to the variable inner.
outer returns the value of inner – the just-defined function.
inner function is assigned to the variable foo.
Function foo is invoked, logging The value of x is: 10 to the console.
The key attribute of closures is demonstrated here: the inner function accesses variable x, which is defined within the parent function outer.
*/

/*
Immediately-invoked function expression
You can alternatively use an immediately-invoked function expression (IIFE) to achieve a similar result.
*/

var foo = (function() {
  var x = 10;

  var inner = function() {
    console.log("Value of x is: " + x);
  }
  return inner;
})(); // Notice the () at the end,
      // which will immediately invoke the function,
      // assigning the returned value (inner) to foo

foo();

/*
Closures definition
JavaScript will retain the context of parent functions, meaning that it will retain references to any variables in parent functions (this is referred to as Lexical Scoping 1).

When a function retains the context of a parent function, we call that a "closure".

For more on closures, check out Eloquent JavaScript (just the Closure section).
http://eloquentjavascript.net/03_functions.html#h_hOd+yVxaku
Or for something more in-depth and with more examples, try MDN.
https://developer.mozilla.org/en/docs/Web/JavaScript/Closures
*/
