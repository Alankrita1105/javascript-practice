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
    