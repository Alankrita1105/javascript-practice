/*
 setTimeout( function () {
    console.log("timer");
}, 5000);//Callback functions in Javascript


function x(y){
    console.log("x");
    y();
}
x(function y() {
    //This function y over here k/a callback function
    console.log("y");
})
*/
function attachEventListners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
   console.log("Button Clicked", ++count);
  });
}
attachEventListners();
