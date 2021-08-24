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