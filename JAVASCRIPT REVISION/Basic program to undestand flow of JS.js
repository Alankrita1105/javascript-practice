/*************** 
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
METHOD 4: UNDEFINED AND NOT DEFINED
*/
/*
var a;
console.log(a);
a = 10;
console.log(a);
a = "Hello there";
console.log(a);

/*
METHOD 4: SCOPE AND LEXICAL ENVIRONMENT
*/
/*
function a() {
    var b = 10;
    c();
    function c() {
      //  console.log(b);
    }  
}
a();

/*
METHOD 5: LET AND CONST DECLARATIONS ARE HOISTED
*/
/*
let p = 10;
console.log(p);
var q = 100;

/*
METHOD 6: BLOCK IN JavaScript
*/
/*
if (true){
    //block is defined by curly breaces
    //compound statement
    //We group multiple statements together in a block so that we can use it where javascript expects one statement
    var a = 10;
    console.log(a);
}

/*
METHOD 7: LET AND CONST DECLARATIONS ARE HOISTED
*/
{
    var p = 10;
    let q = 20;
    const r = 30;
    console.log(p);
    console.log(q);
    console.log(r);
}
console.log(p);
console.log(q);
console.log(r);

/*
METHOD 8: SHADOWING  
*/
var p = 100;
{
    var p = 10;
    let q = 20;
    const r = 30;
    console.log(p);
    console.log(q);
    console.log(r);
}
console.log(p);
/* OUTPUT
10
20 
30
10 HERE, we can see that the variable in third line modifies 
the value of first var declaration*/

/*
function func1() {
    setTimeout(() => {
        console.log(e);
        console.log(f);
    }, 3000);
    var e = 2;
    let f = 12;
}
func1()
*********************/
 /*
METHOD 8: CLOSURES
*/
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y ;
}
var z = x();
console.log(z);

//OUTPUT: 7
//Here Lexical comes to scope.

