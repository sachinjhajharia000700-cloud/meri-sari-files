let product = {
  name: "parker pen",
  price: 300,
  brand: "parker",
  madein: "india",
  discountpercent: 5, // just number, no %
  available: true,
};
console.log(product);

let profile = {
  name: "sachin",
  post: 100,
  followers: 200000,
  profession: "interpeneur",
  experions: "ex-microsoft,DRDD",
  youtube: "desi on desk",
  task: "to make people life easy by coding",
};
console.log(profile);

// Given x = 12; Agar x > 10 ho, “big” print karo
let x = 12;
if (x > 10) {
  console.log("big");
}
// Given temp = 30; Agar temp >= 25 ho, “hot” print karo.// Input: 30 → Output: hot
let temp = 30;
if (temp >= 25) {
  console.log("hot");
}

// Given score = 50; Agar score >= 40 ho, “pass” print karo.Input: 50 → Output: pass
let score = 50;
if (score >= 40) {
  console.log("pass");
}

// Given loggedIn = true; Agar loggedIn truthy ho, “dashboard” print karo
let loggedIn = true;
if (loggedIn) {
  console.log("dashboard");
}

// Given items = 0; Agar items === 0 ho, “empty cart” print karo.
// Input: 0 → Output: empty cart
let items = 0;
if (items === 0) {
  console.log("empty cart");
}
// Given str = "JS"; Agar str.length === 2 ho, “ok” print karo.
// Input: "JS" → Output: ok
let str = "JS";
if (str.length === 2) {
  console.log("ok");
}
// Given n = -3; Agar n < 0 ho, “negative” print karo.

// Input: -3 → Output: negative
let n = -3;
if (n < 0) {
  console.log("negative");
}

// Given email = "a@b.com"; Agar email.includes("@") ho, “valid” print karo.
// Input: "a@b.com" → Output: valid
let email = "a@b.com";
if (email.includes("@")) {
  console.log("valid");
}

// Given total = 999; Agar total >= 999 ho, “min met” print karo.
// Input: 999 → Output: min met
let total = 999;
if (total >= 999) {
  console.log("min met");
}

// Given code = "IN"; Agar code === "IN" ho, “india” print karo.
// Input: "IN" → Output: india
let code = "IN";
if (code === "IN") {
  console.log("india");
}

// Given age = 17; 18 या उससे ज्यादा पर “adult”, वरना “minor”.
// Input: 17 → Output: minor
let age = 17;
if (age >= 18) {
  console.log("adult");
} else {
  console.log("minor");
}

// Given n = 0; n !== 0 par “non-zero”, else “zero”.
// Input: 0 → Output: zero
let ne = 0;
if (ne !== 0) {
  console.log("non-zero");
} else {
  console.log("zero");
}

//Given isMember = false; true par “welcome member”, else “guest”.// Input: false → Output: guest
let isMember = false;
if (isMember) {
  console.log("welcome member");
} else {
  console.log("guest");
}
// Given mark = 81; mark >= 80 par “A”, else “B/C/D/F नहीं specify”—बस “below A”.Input: 81 → Output: A
let mark = 81;
if (mark >= 80) {
  console.log("A");
} else {
  console.log("below A");
}

// Given amt = 1200; amt >= 1000 par “eligible”, else “not eligible”.
// Input: 1200 → Output: eligible
let amt = 1200;
if (amt >= 1000) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

// Given str = ""; non-empty par “has text”, else “empty”.Input: "" → Output: empty
let strs = "";
if (strs) {
  console.log("has text");
} else {
  console.log("empty");
}
// Given speed = 61; 60 से कम/बराबर par “ok”, else “overspeed”// Input: 61 → Output: overspeed
let speed = 61;
if (speed <= 60) {
  console.log("ok");
} else {
  console.log("overspeed");
}

//  Given pin = 1234; सही pin par “unlocked”, else “denied”.
// Input: 1234 → Output: unlocked
let pin = 1234;
if (pin === 1234) {
  console.log("unlocked");
} else {
  console.log("denied");
}

// Given qty = 5; qty % 2 === 0 par “even”, else “odd”.
// Input: 5 → Output: odd

let qty = 5;
if (qty % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Given paid = true; true par “paid”, else “due”.// Input: true → Output: paid
let paid = true;
if (paid) {
  console.log("paid");
} else {
  console.log("due");
}

// Given score = 86; 90+ “A+”, 80–89 “A”, 70–79 “B”, else “C or below”.Input: 86 → Output: A
let scores = 86;
if (scores >= 90) {
  console.log("A+");
} else if (scores >= 80) {
  console.log("A");
} else if (scores >= 70) {
  console.log("B");
} else {
  console.log("C or below");
}

// Given hour = 14; < 12 “morning”, < 18 “afternoon”, else “evening”.// Input: 14 → Output: afternoon
let hour = 14;
if (hour < 12) {
  console.log("morning");
} else if (hour < 18) {
  console.log("afternoon");
} else {
  console.log("evening");
}

// Given temp = 8; < 10 “cold”, < 25 “pleasant”, else “hot”.
// Input: 8 → Output: cold
let temps = 8;
if (temps < 10) {
  console.log("cold");
} else if (temps < 25) {
  console.log("pleasent");
} else {
  console.log("hot");
}

// Given rating = 4; 5 “excellent”, 4 “good”, 3 “average”, else “poor”.// Input: 4 → Output: good
let rating = 4;
if (rating === 5) {
  console.log("excellent");
} else if (rating === 4) {
  console.log("good");
} else if (rating === 3) {
  console.log("average");
} else {
  console.log("poor");
}

// Given size = "M"; "S"→“small”, "M"→“medium”, "L"→“large”, else “unknown”.
// Input: "M" → Output: medium
let size = "M";
if (size === "S") {
  console.log("small");
} else if (size === "M") {
  console.log("medium");
} else if (size === "L") {
  console.log("Large");
} else {
  console.log("unknown");
}
// Given day = 6; 1–5 “weekday”, 6–7 “weekend”, else “invalid”.

// Input: 6 → Output: weekend
let day = 6;
if (day >= 1 && day <= 5) {
  console.log("weekday");
} else if (day === 6 || day === 7) {
  console.log("weekend");
} else {
  console.log("invalid");
}
// Given amount = 2500; >= 5000 “platinum”, >= 2000 “gold”, >= 1000 “silver”, else “basic”.// Input: 2500 → Output: gold
let amount = 2500;
if (amount >= 5000) {
  console.log("platinum");
} else if (amount >= 2000) {
  console.log("gold");
} else if (amount >= 1000) {
  console.log("silver");
} else {
  console.log("basic");
}

// Given pct = 0.15; >= 0.2 “high”, >= 0.1 “medium”, > 0 “low”, else “none”.// Input: 0.15 → Output: medium
let pct = 0.15;
if (pct >= 0.2) {
  console.log("high");
} else if (pct >= 0.1) {
  console.log("medium");
} else if (pct >= 0) {
  console.log("low");
} else {
  console.log("none");
}
//  Given tries = 3; == 0 “no attempts”, == 1 “single”, <= 3 “few”, else “many”.

// Input: 3 → Output: few
let tries = 3;
if (tries === 0) {
  console.log("no attempts");
}
else if (tries === 1) {
  console.log("single");
}
else if (tries <= 3) {
  console.log("few");
}
else {
  console.log("many");
}
// Given code = "404"; "200" “OK”, "401" “Unauthorized”, "404" “Not Found”, else “Other”.

// Input: "404" → Output: Not Found
let codes = 404;
if (codes === 200) {
  console.log("ok");
}
else if (codes === 401) {
  console.log("Unauthorized");
}
else if (codes === 404) {
  console.log("Not Found");
}
else {
  console.log("other");
}
//  Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is  a multiple of 5 or not.
let num = +prompt("Enter a number:");
if (num % 5 === 0) {
  console.log(`${num} is a multiple of 5`);
}
else {


  console.log(`${num} is not a multiple of 5`);
}


// another question
// let  grade = +prompt("enter a number");
// if(number>=90 && number<=100){
//     console.log("A");
// }
// else if(number>=80 && number<90){
//     console.log("B");
// }
// else if(number>=70 && number<80){
//     console.log("C");
// } 
// else if(number>=60 && number<70){
//     console.log("D");
// } 
// else if(number>=40 && number<60){
//     console.log("E");
// } 
// else{
//     console.log("F");
// }
let grade = +prompt("Enter a number (0-100):");

if (!Number.isFinite(grade)) {
  console.log("Please enter a valid number");
} else if (grade < 0 || grade > 100) {
  console.log("Please enter a number between 0 and 100");
} else if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80 && grade < 90) {
  console.log("B");
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else if (grade >= 60 && grade < 70) {
  console.log("D");
} else if (grade >= 40 && grade < 60) {
  console.log("E");
} else {
  console.log("F");
}



// 1 से 10 तक के numbers प्रिंट करो, लेकिन अगर number odd है तो "Odd" और अगर even है तो "Even" भी print करो।
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "Even");
  } else {
    console.log(i, "Odd");
  } 
}
// 1 से 50 तक के सभी numbers का sum निकालो, लेकिन sum में सिर्फ odd numbers include करना है।
let sum  = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
} 
console.log(sum);


// User से कोई number लो (मान लो n), फिर 1 से n तक के numbers प्रिंट करो और check करो कौन-कौन से numbers 3 से divisible हैं।
let number  = +prompt("Enter a number:");
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i, "is divisible by 3");
  }
}
// 1 से 20 तक के numbers प्रिंट करो, लेकिन अगर number 5 से divisible है तो number की जगह "Buzz" print 
let buzz = 0; 
for ( let i = 1; i<=20;i++){
  if(i%5===0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

// User से कोई number लो और उस number का factorial निकालो (loops और if का use करो)।
let fact = 1;
let factorial = +prompt("Enter a number:");
for (let i = 1; i <= factorial; i++) {
  fact = fact * i;
}
console.log(fact);
// 1 से 100 तक के numbers प्रिंट करो, लेकिन सिर्फ prime numbers। (Hint: हर number check करने के लिए nested loop और if का use करना)।

let numbers = +prompt("enter a number(0-100)");
for (let i = 2; i <= number; i++) {
  let isPrime = true; 
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false; 
      break; 
    }
  }   
  if (isPrime) {
    console.log(i);
  }
}



   



