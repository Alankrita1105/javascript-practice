//Object creation
let person ={
    name:"Alakrita",
    age: 25,
};

//defining array
let arr = ["apple","banana","cherry", person];

//Add end of array
arr.push("orange");

//remove from end of array
arr.pop();
arr.pop();

//add at top of array
arr.unshift("Orange");

//remove from top of the array
arr.shift();
//console.log(arr);

//Looping of array
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]); 
}
let i=0;
while (i<arr.length) {
    //console.log(arr[i]);
    i++
}

//INBUILT LOOP METHODS

const numbers = [1, 2, 3, 4, 5];


//map in javascript
const newNums1 = numbers.map((item, index, array) => {
    return item+5;
});

//filter in javascript
const newNums2 = numbers.filter((item, index, array) =>{
    return item>3;
});

//reduce in javascript
const sum = numbers.reduce((prev, item) => {
    return prev+item;
}, 2);

//some in javascript
const res = numbers.some((item, index, array) =>{
return item > 3;
});

//every in javascript
const everyFunc = numbers.every((item, index, array) =>{
    return item > 3;
});

//find in javascript
//every in javascript
const findFunc = numbers.find((item, index, array) =>{
    return item > 3;
});

//console.log(findFunc);

//Spread and Rest Operators
const nums = [1,2,3];
const nums2 = [4,5,6,7];

const finalSums =[...nums, ...nums2];   //Spread Operator

function sums(...numbers) {
    return numbers;
}
console.log(sums(nums,nums2, 5 , 'hello'));

git config --global user.email "you@example.com"
  git config --global user.name "Your Name"