let c = 39016;

let a = [1, 2, 3, 4];
let b = a;
//      strings== strings vo hota hai jo ki quotes mei hota hai just like single quotes
//       double quotes and one another type of  quotes that is called as backticks  and
//       the backticks is just below the esc button

//      numbers == numbers are defined as just numbers like 2 is also a number and2.3 is
//      also a number

//     boolean == boolean contains two thing and that is called as true and false
//      example of boolean= let a = "true"
//      let b = "false"

//      null== null means we have to give the propert any value and if we give the value
//       null it means that
//      we dont have the value and this moment but we give the value in future
//      here is example of null== let a = null

//      undefined== undefined means we dont have a value of a particular things like
//      let a; this is undefined primitive

//      symbol== future mein hum koi libraries use karege ab is case mein un libraries
//      mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur
//      galti se humaari banaai hui fields us library ki original fields ko change kar
//      deta hai
//      in short we create  unique things  from symbols

//      bigint==we have some limits in integer  and its very tipical to hold as such
//       large amounts of number and if we write above the number then we have to face
//       the problems so for avoiding that problem
//      we write the text N at the end of the large number and if we have to add any
// other number in  that large number then we have to add n in the number also that
//      we have added in the old nnumber example
//      let a = 9749872319023487n and we have to add 2 in this the we write
//      console.log(a+2n) and then get the  value

//      Dynamic typing - js mein static typing nahi hai and yaha par hai dynamic typing
//       jiska matlab hai aap data ko change kr skte ho kyukli yaha

// @

//    par dynamic data types hai

//
//
//
//  let a= 12;

//  a = true;

// a "harsh";

//  a=;

// a = null;

//  a undefined;

// there are so many quirks in jav script quirks means that there
// are many thing that have no  logic and they happen so they are called quirks

//      typecoercian values == this is a thing that do viered things like
//  javascript add string and number and it convert number into strings not string into number
//  because add(+) means in coding add two things first is add two numbers like
// 1+2=3 and second things is if we write sachin + jhajharia then java script show it
// as sachin jhajharia so when  we add strings with a number then priority is given to
//  string not number and we have substract the string to numbers then
// it will only have a one option it only substract the two things

//        truth and falsy values  is a system that read out the things nature
// that are placed in the  place of true and false  and  it change
// the value according to  the nature of the thing that you write in the place
//  of  true and false

//   OPERATORS

// Airhematic
// + -  * %  / **
// + add two things like
//  example 1+2 = 3
//  sachin +jhajharia =sachin jhajharia
// - substract two things like 3-2 = 1
// * multiply two numbers like
// 3*3 = 9
//  / divide means it divide two numbers like
//  4/2 =  2
//  % it give the reminder when we divide two numbers like
//  6%4 = 2
//   **  it gives the square of any number like 2**2 = 4 ,, 3**2 = 9

// Comperision
// =
// ==
// ===
// !=
// !==
// >=
// <=
// >
// <

// = it is used for assign value for var,let and const and any other things
//  == it is used for comparision of two things and it only consider
// value not type like if we put 12==12 it says true but we ask "12"== 12
//  it also say yes and here we use === because it gives proper comparision
// of all the things
// ==== gives accurate comparision
// != it means not equal if we put 12!= 13 the answer is true but same
//  as above it dont gives coorect comparision
//  !== gives correct comparision properly of everything
// >=,,=,<,> all are used as a comparision like if we put 12>=12 we get true ,
// if we put  13>11 we get true others are same as these

//                                                        ASSIGNMENT

// IT CONTAINS =  As IT TOLD ABOVE
// // it contains many format like as below
// +=
// -=
// %=
// *=
// /=

// so here i told only one of the above and rest
// have same way of understanding
// += lets see with a example like we have
// let a = 12;
// a+=3 changes the value of a by adding 3 in the a
// so new value of changes and we have new value of
// a and that is 15

//   LOGICAL
//    $$,||,!
//    SO LETS START
//  $$  = meaning is that just like see with it an example
// 12>13$$11>10 so it gives the value false because 12 is less then 13 so it is false but on other side 11 is greater
// then 10 so it is true so in this concept if  we  finds any value false on one side its result is always false
// || = meaning is that just look it at via an example
// 12>13||11>10 then it gives the output true because one value is true so basically if one value is true then we can say
//  that its output value is true
// ! = it converts falsy value into truthy and vice versa

//  UNARY
//It inclides + ,-,type off,++,--,!
//  if we put ++ in back of a any alphabet then it exeeded
//  by 1 and if we put ++ in front then we dont have any
//  change  exept in one condition
// just look at the example below
// let a = 12;
// ++a changes the value of a in 13
// a = 13;
// but if we put in front then we dont see in change
// let a = 12;
// a++ don't change the value of a
//exceptional comdition
// let a= 23
// a++  +a
// gives the value 47
// same for --
// if we put - in back of an alphabet then it converts into -
// let see an example
//  let f = 8
//  -f convert it into -8
// if we put ! in back of any thing it tells about
// either it is true or false lets see via an example
//  if we put ! in back of a number then it
//  gives the output false and vice versa
// if we put   (type of)   in back of anything
//  then it tells about its class lets see the example it
//  have some bugs in which it gives answer wrong like
// type of null  gives =object type  of array =object
//  type of nan gives output number
// typeof 12
// gives the result
// number

//                     TERNARY
//  IT INCLUDES ?,:
// (12>13) ? console.log("true"); console.log("hahah");
// (age >= 18) ? "Adult" : "Minor"

//        IF ,ELSE ,ELSE-IF
//      SWITCH CASE
//  EARLY RETURN PATTERN
// lets see these 3 one by one with examples
//  lets begain
// first lets try to understand the if,else,else-if with examples
// let name = sachin;
// if( name="sachin"){ console.log("correct");} else{console.log(incorrect);}
//  another one in which we includes these all
// let carname = "skoda";
// if ( carname ==="skoda"){ console.log("verify");} else if(carname==="maruti" ){ console.log( "not verify");}
// else { console.log( "get out");}
// switch case
// in this we use switch and case in the place of if and else
// switch(1){ case 1: console.log("heyhey"); break; case 2: console.log("case 2"); break; case 3: console.log("case 3");
// break;}
// early return pattern basically do one thing and that is make your code better to understand it replace else if
// an else from your syntax
// function example(value) {
//   if (!value) {
//     return; // early return if condition not met
//   }
//   // main logic here, executes only if above condition is false
//   console.log("Value is:", value);
// // }
// function divide(a, b) {
//   if (b === 0) {
//     return "Error: Division by zero"; // early return on invalid input
//   }
//   return a / b;
// }

// console.log(divide(4, 2));  // Output: 2
// console.log(divide(4, 0));  // Output: Error: Division by zero
