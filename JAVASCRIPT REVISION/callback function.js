/*
setTimeout( function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {
    console.log("y");
});  
*/

/*
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
        callback("Operation complete");
    }, 1000);
    }
    
    // Define the callback function
    function callbackFunction(result) {
    console.log("Result: " + result);
    }
    
    // Call the main function with the callback function
    mainFunction(callbackFunction);
    //This code is contributed by Veerendra Singh Rajpoot
*/

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
console.log("Performing operation...");
// Use Array.forEach to loop through the array of numbers
numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
console.log("Result: " + number);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
// This code is contributed by Veerendra Singh Rajpoot
