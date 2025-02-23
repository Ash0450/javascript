// 1 Basic Promise (new Promise)
// This is the most common type of Promise, where you manually define the logic of resolving or rejecting a Promise.

let promise = new Promise((resolve, reject) => {
    let success = true; // This is just an example; you can change it to simulate a failure

    if (success) {
        resolve("Operation was successful!"); // Resolving the promise
    } else {
        reject("Operation failed."); // Rejecting the promise
    }
});

promise
    .then(result => {
        console.log(result); // "Operation was successful!"
    })
    .catch(error => {
        console.log(error); // Will not be called here
    });


// 2 Chained Promises (.then and .catch)
// Promises can be chained to handle multiple asynchronous operations in sequence.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First step complete"), 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second step complete"), 1000);
});

promise1
    .then(result => {
        console.log(result); // "First step complete"
        return promise2; // Returning the next promise
    })
    .then(result => {
        console.log(result); // "Second step complete"
    })
    .catch(error => {
        console.log(error); // In case of any error in any promise
    });
//Explanation: Here, two promises are created and chained. The second promise executes after the first promise is resolved. If any promise fails, the .catch() will handle the rejection.

// 3  Promise.all()
// Promise.all() is used to execute multiple promises in parallel. It takes an array of promises and returns a single promise that resolves when all the promises in the array have been resolved. If any promise rejects, the entire promise chain is rejected.

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First task done"), 1000);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second task done"), 500);
});

Promise.all([promise3, promise4])
    .then(results => {
        console.log(results); // ["First task done", "Second task done"]
    })
    .catch(error => {
        console.log("An error occurred: ", error);
    });

// Explanation: Promise.all() waits for both promises to resolve. The resulting array contains all the resolved values, in the order they were in the input array. If one promise fails, the entire promise chain fails.

// 4 Promise.allSettled()
// Promise.allSettled() waits for all promises to settle (either fulfilled or rejected), and it provides the outcome of each promise.

let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First task completed"), 1000);
});

let promise6 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Second task failed"), 500);
});

Promise.allSettled([promise5, promise6])
    .then(results => {
        console.log(results);
    });

// Explanation: Promise.allSettled() returns an array with each promise's status and the result. Unlike Promise.all(), it doesn't reject if one of the promises fails. It just marks it as rejected.

// 5 Promise.race()
// Promise.race() returns a promise that resolves or rejects as soon as the first promise in the array resolves or rejects.

let promise7 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First task done"), 2000);
});

let promise8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Second task done quickly"), 1000);
});

Promise.race([promise7, promise8])
    .then(result => {
        console.log(result); // "Second task done quickly"
    })
    .catch(error => {
        console.log(error);
    });

// Explanation: Promise.race() resolves with the result of the first promise that resolves or rejects, regardless of the other promises. In this example, promise2 resolves first, so its result is logged.

// 6. Promise.resolve() and Promise.reject()
// These are utility methods that return a resolved or rejected promise.
// Promise.resolve(): Returns a promise that is resolved with a given value.
// Promise.reject(): Returns a promise that is rejected with a given reason

let resolvedPromise = Promise.resolve("This is resolved");
resolvedPromise.then(value => {
    console.log(value); // "This is resolved"
});

let rejectedPromise = Promise.reject("This is rejected");
rejectedPromise.catch(error => {
    console.log(error); // "This is rejected"
});

//Explanation: Promise.resolve() creates a promise that immediately resolves, and Promise.reject() creates a promise that immediately rejects.





