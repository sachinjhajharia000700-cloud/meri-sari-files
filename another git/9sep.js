// PRACTISE QUESTIONS HAI FUNCTIONS KE 
// question NO.1

function kalu() {
    console.log("kalu is a good boy");
}
kalu();
// ye hai function declaration
// esma hum log hoisting kar sakte hai lets see with an example
lankesh();

function lankesh() {
    console.timeLog("lokesh is handsome gay");
}

let v = function () {
    console.log("vimal");
};
v();
// ye function expression hai
// ye jo function declaration hai esma haam log hoisting nhi kar sakte error show karega hositig hoti hai
//  ki haam function ko call phela kar le or function baad me likh rhe hai lets see with it with an example
abcd();

let abcd = function () {
    console.log("mohan is good guy");
};
//  its so an error so from this we learned that hoisting is done in function
// declaration not in function expression

// QUESTION 2. theortical tha so dont write it here
// QUESTION 3 CONVERT IT INTO FAT ARROW FUNCTION

function multiply(a, b) {
    return a * b;
}
// ye nicha jo mene console.log lika hai ye mene
// additional likha hai so dont panic apko just convert karna hai upper wala function ko
console.log(multiply(3, 4));
// so lets convert it into fat arrow  function
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(a, b));
//  QUESTION No.4
//   THEORTCAL PART HAI  so dont need to write it here
//  QUESTION No.5
//   THEORTCAL PART HAI  so dont need to write it here
//  QUESTION No.6
// so we have to predict the output of the given function
function sayHi(name="Guest"){
    console.timeLog("Hi",name);
}
sayHi();
// esme sayHi to run ho gaya hai but kuki hamne esko koi value nhi di hai so  
// default value hi ayegi jo ki hai guest so at the end we ger Hi Guest
//  QUESTION No.7
// thortical question tha so dont need to write hereand question 8 is of array so dont need to write it here too


// QUESTION Node. 9 
//  esko early return me convert karna hai 

function checkage(age){
    if (age<18){
        console.log("too young");
    } 
    else{
        console.log("allowed");
    }
}
function checkage(age){
    if (age< 18) return "too young" ;  return "allowed"
}
// QUESTION NO, 10 THEOTICAL HAI JISMA KHA GAYA HAI KI AGER KOI FUNCTION 
// DECLARE NHI KIYA JATA KOI VALUE NHI DEE JATI TO OUTPUT KYA MILEGA SO OUTPUT MILEGA  UNDEFINED 
//QUESTION NO, 11
// WHAT DOES IT MEAN WHEN WE SAY "FUNCTIONS ARE FIRST CLASS  CITIZENS"?
// ye theortical hai so we dont need to write it here 
// QUESTION NO. 12
// can you assign a function to a variable and then call it 
let babul = function(){
    console.log("bavlig");
}
babul();
// QUESTION 13
// PASS A FUNCTION INTO ANOTHER FUNCTION AND PASS IT IN IT 
function rohit(r1){
r1();
}
rohit(function(){
    console.log("raghav");
});
// QUESTION NO.14 
// WHAT ARE HIGHER ORDER FUNCTION  THERE ARE TW TYPES BY WHICH WE CAN SAY THAT IT A HIGHER ORDER FUNCTION 
function abla (){
return function(){

}
}
abla();
//  ELSE WE HAVE ANOTHER OPTION
function naari (age){
age();
}
age(function(){

})
// QUESTION  NO.15
// array ka questio hai so dont need to do 

// QUESTION NO.16
// /IDENTIFY THE FUNCTION WHICH IS PURE FUN. AND WHICH IS IMPURE FUN.
let total = 0;
function addtototal(num){
total+=num;
}
// so this is impure function kuki ye bhar ke fun.ki value ko change kar rha hai so this is impure fun.


