//QUES1:
/*
function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 3000); 
    console.log("These are Closures");
}
x(); 

OUTPUT: These are Closures, 1
*/

 
//QUES 2:
/*
function x() {
    for (var i = 0 ; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000);
    }
    console.log("Alankrita Srivastava");
}
x();
OUTPUT:
Alankrita Srivastava
6
6
6
6
6 
*/

/*
function x() {
    for (var i = 0 ; i<=5; i++) {
        function close(x) {             //Close function
            setTimeout(function() {       
                console.log(x);
            }, x  * 1000 );  
        }
        close(i);   
    }
    console.log("Alankrita Srivastava");
}
x();

OUTPUT:

Alankrita Srivastava
0
1
2
3
4
5 
*/