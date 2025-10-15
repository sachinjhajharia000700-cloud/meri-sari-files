let number = 10;
let result = number >= 0 ? "good" : "bad";
console.log(result);

let numb = 31;
let report = numb % 2 === 0 ? "even" : " odd";
console.log(report);

let age = 18;
console.log(age >= 18 ? "allowed" : " arrest");

let marks = 40;
console.log(marks >= 40 ? "pass" : "fail");

let numbers = 3;
console.log(numbers === 0 ? "zero" : numbers < 0 ? "negative" : "positive");

let temperature = 2;
console.log(
  temperature >= 30
    ? "hot"
    : temperature <= 30 && temperature === 0
    ? "cold"
    : "very cold"
);

let password = "sachin";
console.log((password = "sachin" ? "login" : "please enter a valid password"));

// practise question of apna college only 2 questions
let nu = prompt("lets give a number");
console.log(prompt % 5 === 0 ? " multiple of 5 " : "not a multiple of  5");

let grade = 56;
console.log(
  grade >= 80 && grade <= 100
    ? "A"
    : grade >= 70 && grade <= 80
    ? "B"
    : grade >= 60 && grade <= 69
    ? "c"
    : grade >= 50 && grade <= 59
    ? "d"
    : "fail"
);
