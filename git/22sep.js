// // //  create a function using the  "function " keyword that takes a string as an arrgument and returns the number of vowels in the string
// function countvowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }



// let nums =[1,2,3,4,5,6,7,8,9,10];
// nums.forEach((num) => {
//     console.log(num*num);
// })



// let arr = [11,12,13,14,15,16,17,18,19,20];
//  let evenarr = arr.filter((num) => {
//     return num > 15; 
// });
// console.log(evenarr);

let rrr = [90,91,92,93,94,95,96,97,98,99 ,100];
 let evenarrr = rrr.filter((num) => {
    return  num > 90;

})
console.log(evenarrr);

let b = prompt("enter the number please")
let array = [];
for (let i = 1; i <= b; i++) {
   array[i-1] = i;
}
console.log(array);
 
let sum = array.reduce((a,b) => {
    return a + b;
})
console.log( sum);

let factorial = array.reduce((a,b) => {
    return a * b;
})
console.log(factorial);x