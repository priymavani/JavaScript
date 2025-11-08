// function currying 

//Function Currying is a technique in JavaScript where a function that takes multiple arguments is transformed into a sequence of functions that take one argument at a time.

function add(a) {
    return function(b) {
        return a + b;
    };
}

const add5 = add(5);
console.log(add5(10)); // 15
console.log(add5(20)); // 25

console.log(add(3)(7)); // 10

/*
Why we need / use Currying?

Currying is useful because it allows:

Reusability – You can create new functions by partially applying existing ones.

Customization – Fix some parameters early and reuse the function later.

Code clarity – Makes it easy to compose and reuse smaller logic pieces.

Functional programming – It fits well with functional programming concepts like composition and higher-order functions.

*/
