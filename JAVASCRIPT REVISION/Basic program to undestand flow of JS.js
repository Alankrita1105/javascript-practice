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
  //  console.log("Alankrita Srivastava");
}
getName();
//console.log(x);

/*Method 2: Hoisting in JS */
getName1();
//console.log(y);
//console.log(getName1);

var y=7;
function getName1() {
    //console.log("Alankrita Srivastava");
} 

var z = 7;
function getName2() {
 //   console.log("Hi, JS");
}
getName2();
//console.log(z);
//console.log(getName2);


/*
METHOD 3: FUNCTON ENVOCATION AND VARIABLE ENVIRONMENT
*/

var x = 1;
a();
b();
//console.log(x);
function a() {
    var x = 10;
    //console.log(x);
}
function b() {
    var x = 100;
   // console.log(x);
}

/*
METHOD 4: UNDEFINED AND NIT DEFINED
*/
