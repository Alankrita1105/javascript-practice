/*
CONCEPT 1
Cycle of allocations and call stack
*/

var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var sqaure2 = square(n);
var sqaure3 = square(5);
//console.log(sqaure3);


/*
CONCEPT 2: Method 1
Hoisting in JS*/

var x =7;
function getName() {
    console.log("Alankrita Srivastava");
}
getName();
//console.log(x);

/*Method 2: Hoisting in JS */
getName1();
console.log(y);

var y=7;
function getName1() {
    console.log("Alankrita Srivastava");
}