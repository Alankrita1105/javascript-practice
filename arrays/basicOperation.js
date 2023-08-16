//Initialisation
var a = 5;
var b = 6;
var c = "My name is";

a += 1;
b += b+1;
c += c + " Alankrita";
//console.log(b*a);

var myName = "My name is \"Alankrita Srivastava\"";
//console.log(myName);

/*
CODE OUTPUT
\' SINGLE QUOTE
\" DOUBLE QUOTE
\\ BACKSLASH
\n New line
\r carriage return
\t tab
\b backspace
\f form feed 
*/

var concatinationStr = "My name is" + " Alankrita Srivastava";
//console.log(concatinationStr);

//CONSTRUCTIONG STRING WITH VARIABLES
var myNameis = " Alankrita Srivastava";
var completeName = "Hello my name is" + myNameis + ", I am well."
//console.log(completeName);

//FINDING STRING LENGTH
var namelength = 0;
var mynamelen = "Alan";
namelength = mynamelen.length;
//console.log(namelength);

//BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
var mynamelen = "Alan";
namelength = mynamelen[mynamelen.length- 1];
//console.log(namelength);

//WORD BLANKS
function wordBlanks (noun, verb, noun2)
{
    var result = "The " + noun + "was " + verb + "by " + noun2 ;
    return result;
}
//console.log(wordBlanks("Qutub Minar ", "built ", "Qutub-Ud-Din-Aibak"));

//GLOBAL SCOPE AND FUNCTIONS
var myGlobal = 10;
function fun1() {
    //code
}
var myGlobal2 = 7;
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal", + myGlobal;
        
    }

}