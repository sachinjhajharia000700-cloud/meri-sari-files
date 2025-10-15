let n = 100;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

let m = 100;
let sumeven = 0;
for (let i = 2; i <= m; i += 2) {
  sumeven += 1;
}
console.log(sumeven);

let b = 10;
let f = 1;
for (let i = 2; i <= b; i++) {
  f *= i;
}
console.log(f);

let d = 12;
let a = 0;
for (let i = 1; i <= d; i++) {
  if (d % i === 0) a++;
}
console.log(a);

//apna college ki loops ke questions solve kar rha hu
// print karo even numbers 0 1=to 100
let l = 100;
for (let i = 0; i <= l; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// const gamenum = 20;
// let userthink = prompt("Give me a number");

// while (userthink !== null && Number(userthink) !== gamenum) {
//   userthink = prompt("You entered a wrong number: guess again please");
// }

// if (userthink !== null) {
//   console.log("Congratulations! You win an Egyptian in reward");
// } else {
//   console.log("Game cancelled");
// strings practise

let str = "kakajidwehfdiewyhewhkewndcewewhfdkewndioew";
console.log(str[15]);
// strings ke practise questions apna college ke questioms =hai 
 let fullname = prompt("please enter your  full usernmae");
 let username = "@" + fullname + fullname.length;

console.log(username);
