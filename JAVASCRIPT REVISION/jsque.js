//QUES 1:
/*function func1() {
    setTimeout(() => {
        console.log(e);
        console.log(f);
    }, 3000);
    var e = 2;
    let f = 12;
}
func1()
OUTPUT: 2,12
*/


//QUES 2:
/*function func2() {
    for(var i = 0; i<3; i++){
        setTimeout(() => console.log(i),2000) ;
    }
}
func2(); 
OUTPUT: 3, 3, 3
*/


//QUES 3:
/*
(function (){
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);      
}) ();
OUTPUT:4, 2, 3, 1
*/