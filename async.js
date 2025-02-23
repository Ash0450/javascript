// 1. Callbacks

// A callback is a function that is passed as an argument to another function, and it is executed after the first function completes. It's a way to handle asynchronous operations like file reading, fetching data from an API, or setting a timeout.

//Issues with Callbacks (Callback Hell):
// One major downside of callbacks is something called "callback hell," which happens when you have several nested callbacks. This can make the code hard to read and maintain.

function fetchdata(callback) {
    setTimeout(() => {
        const person = { type: 'human', nature: 'good' };

        callback(person);
    }, 2000);
}

fetchdata(function (person) {
    console.log(person);
})//getting the output after 2 seconds 

// Example callback hell
fetchData(function (data) {
    processData(data, function (result) {
        saveData(result, function (response) {
            console.log('Data saved!', response);
        });
    });
});


// 2. Promises

// A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to chain .then() methods for successful operations and .catch() for handling errors.

//The key benefit of promises over callbacks is that you avoid callback hell, and you can write more readable, maintainable code


//for success
const fetchdData = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve({ type: 'human', nature: 'good' });
        } else {
            reject(new Error('Something went wrong'));
        }
    }, 2000)
})

fetchdData.then((person) => {
    console.log(person);
}).catch((error) => {
    console.log(error);
})

// for Error handling
const fetchData = new Promise((resolve, reject) => {
    const success = false;

    setTimeout(() => {
        if (success) {
            resolve({ type: 'human', nature: 'good' });
        } else {
            reject(new Error('Something went wrong'));
        }
    }, 2000)
})
const practice = new Promise((resolve, reject) => {
    const success = false;
    setTimeout(() => {
        if (success) {
            resolve({ type: 'human', nature: 'good' })
        }
        else {
            reject(new Error('Something went wrong'));
        }
    }, 5000)
})

practice.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})


// 3. Async/Await

async function fetchData() {
    try {
        const asd = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ type: 'human', nature: 'good' });
            }, 2000)
        });
        console.log(asd);

    } catch (error) {
        console.error('error', error);
    }
}

fetchData();


function jkh() {
    setTimeout(() => {
        console.log("hello")
    }, 2000)
}

async function asyncFunction() {
    try {

        const result = await jkh();
        console.log(result);
    }
    catch (error) {
        console.log('erre', error);
    }
}


//"start" is logged first.
// "end" is logged next because it’s executed right after creating the promise.
// The resolved value { type: 'human', nature: 'good' } is logged from the .then() handler, which occurs right after the event loop processes the promise resolution.
// Finally, "timeout" is logged after 2 seconds due to the setTimeout.


console.log("start");
new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({ type: 'human', nature: 'good' });
    }
})
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }
    )
setTimeout(() => {
    console.log("timeout");
}, 2000)
console.log("end");
