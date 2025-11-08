let promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("operation  successfully");
    }else{
        reject("operation fail");
    }
});

console.log(promise);

promise.then((result)=> {
    console.log(result);
}).catch((error)=>{
    console.log("Some Error");
    console.log(error);
    console.error(error);
})
.finally(() => {
    console.log("Promise Completed");
})



// fetch data from api using promise

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) =>{
    
    return response.json();
    // if we will try to access the response data directly it will give us a promise
    // because response.json() is also a promise
    //it will show the promise is panding
    // so we need to return response.json() and then we can access the data in next then block
    
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log("Some Error");
    console.log(error);
    console.error(error);
})
.finally(() => {
    console.log("Promise Completed");
})


new Promise((resolve) => {
    resolve(2);
})
.then((num) => {
    console.log(num);
    return num*2;
})
.then((num) => {
    console.log(num);
    return num*2;
})
.then((num) => {
    console.log(num);
   
})

/*
Each .then() runs after the previous one finishes.

Whatever you return inside .then() is passed to the next .then().

If you return a value, it becomes the next .then()’s input.

If you return a Promise, the next .then() waits for it to resolve.

-------------------------------------------------------------------------------------------------------------
*/



// Promise.all()

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2'),
    fetch('https://jsonplaceholder.typicode.com/todos/3')
])
.then((response)=> {
    console.log("ALL DONE" , response);
})
.catch((error) => {
    console.log("Some Error");
})

/*
Promise.all() is a Promise utility method that lets you run multiple promises in parallel and wait for all of them to finish before continuing.

🧠 Syntax
Promise.all([promise1, promise2, promise3])


Takes an array of Promises.

Returns a single Promise that:

✅ Resolves when all promises are fulfilled.

❌ Rejects immediately if any one promise fails.

-------------------------------------------------------------------------------------------------------------
*/




// Promise.allsettled()

Promise.allSettled([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2'),
    fetch('https://jsonplaceholder.typicode.com/todos/3')
])
.then((response)=> {
    console.log("ALL DONE" , response);
})
.catch((error) => {
    console.log("Some Error");
})

/*
Promise.allSettled() runs multiple promises in parallel —
✅ but it waits for all of them to finish, whether they succeed or fail.

🧠 Syntax
Promise.allSettled([promise1, promise2, promise3])


It returns a single Promise that resolves (never rejects)
when all input promises have settled (either fulfilled or rejected).

Concept	Explanation
Purpose	Run multiple promises and get results for all, regardless of success/failure
Returns	A single promise that resolves to an array of result objects
Never rejects	Even if all fail
Each result object	{ status: "fulfilled", value: ... } or { status: "rejected", reason: ... }
Use case	Collect all outcomes (like batch API calls, logs, or retries)

-------------------------------------------------------------------------------------------------------------
*/



// // promise.race()

Promise.race([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2'),
    fetch('https://jsonplaceholder.typicode.com/todos/3')
])
.then((response)=> {
    console.log("ALL DONE" , response);
})
.catch((error) => {
    console.log("Some Error");
})

/*
🧩 What is Promise.race()?

Promise.race() runs multiple promises in parallel —
but only the first one to settle (resolve or reject) decides the outcome.

🏁 Think of it like a race — whichever promise finishes first “wins”.

Syntax
Promise.race([promise1, promise2, promise3])


Returns a single Promise

It settles (resolves or rejects) as soon as any input promise settles

The rest are ignored
-------------------------------------------------------------------------------------------------------------
*/

// // Promise.any()

Promise.any([
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    fetch('https://jsonplaceholder.typicode.com/todos/2'),
    fetch('https://jsonplaceholder.typicode.com/todos/3')
])
.then((response)=> {
    console.log("ALL DONE" , response);
})
.catch((error) => {
    console.log("Some Error");
})

/*
🧩 What is Promise.any()?

Promise.any() runs multiple promises in parallel —
and it resolves as soon as the first promise fulfills (succeeds).

❗Unlike Promise.race(), it ignores rejections unless all fail.

🧠 Syntax
Promise.any([promise1, promise2, promise3])


Returns a single Promise.

Resolves → with the first fulfilled result.

Rejects → only if all promises reject, giving an AggregateError.

-------------------------------------------------------------------------------------------------------------
*/


/*
🧩 Quick Recap of All Four
Method	                Resolves when	    Rejects when	   Use Case

Promise.all()	        All fulfilled	    Any fails	       Need all results
Promise.allSettled()  	All settled	        Never	           Get every outcome
Promise.race()	        First settled	    First rejects	   Timeout / fastest result
Promise.any()	        First fulfilled	    All fail	       First success wins
*/


// async 

async function getData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erro", error);
    } finally {
        console.log("Done");
    }
}


getData();
