Practice interview questions with Toptal
  https://www.toptal.com/javascript/interview-questions


1. What is a potential pitfall with using `typeof bar === "object"` to determine if `bar is an object? How can this pitfall be avoided?
  Most things in JS are objects. If bar was created as an instance of new Array() it would still be an object. To determine if `bar` was an object we could use the Object.prototype.toString() method. If `bar` is a true object it would return `[objec Object]`.

2. What will the code below output to console and why? 
```
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
console.log(b)
```

This is a Immediately Invoked Function Expression (IIFE) because it is wrapped in ()
a will be undefined because var reassigns b to a. b will have an output of 3

3. What will the code below output to the console and why?
```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```

outer func: this.foo = 'bar'
outer func: self.foo = 'bar'
inner func: this.foo = undefined because this is no longer referencing myObject
innter func: self.foo  = 'bar' 


4. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
   Wrapping a JS source code in a function block creates cleaner and more modular code. Seperating out necessary functions from each other gives developers an easier time to identify problems instead of scrolling through one long source code.

   Provided answer: Avoids overriding existing variables by creating a private namespace.

5. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?
   In cases where `use strict` is not in use, and semicolons are not properly place, it could cause potential errors when the file is ran. 
   `use strict` enforces stricter parsing and error handling during runtime. 
   Assigning a value to an undeclared variable creates a global variable with that name which is one of the most commone errors in JS.
   Without strict mode, referencing `this` to a null or undefined value will create a global value. If using strict mode, null and undefined will throw an error.