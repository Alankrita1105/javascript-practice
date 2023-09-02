//QUES1:
function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000);
    console.log("These are Closures");
}
x(); 

//OUTPUT: These are Closures, 1