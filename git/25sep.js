let a = [
  1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
let b = a.filter((num) => num % 2 === 0);
console.log(b);

let c = [
  "apple",
  "banana",
  "pineapple",
  "gauvava",
  "grapes",
  "orange",
  "watermelon",
];
let d = "an";
let e = c.filter((fruit) => fruit.toUpperCase().includes(d.toUpperCase()));
console.log(e);

let fruits = ["Apple", "banana", "Grapes", "mango", "Orange"];
let query = "an";
let result = fruits.filter((s) =>
  s.toLowerCase().includes(query.toLowerCase())
);
console.log(result);
// result -> ["banana", "mango", "Orange"]

let f = [
  { item: "pen", price: "300" },
  { item: "pencil", price: "50" },
  { item: "notebook", price: "200" },
  { item: "paper", price: "100" },
  { item: "pencil", price: "60" },
  { item: "pencil", price: "70" },
];

let g = f.filter((p) => p.price > 100);
console.log(g);

let mixtureset = [undefined, NaN, "ok", null, 0, 1, 2, 3];
let seperate = mixtureset.filter(Boolean);
console.log(seperate);

let users = [
  { name: "Aman", age: 17, active: true },
  { name: "Sara", age: 22, active: false },
  { name: "Rohit", age: 19, active: true },
];

let allowed = users.filter((u) => u.active && u.age > 18);
console.log(allowed);

let h = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = h.map((num) => num * num);
console.log(i);

let j = ["ashish", "sachin", "vikash", "lucky", "anup", "lala"];
let k = j.map((val, i) => `${i} :${val}`);
console.log(k);

let l = ["ashish", "sachin", "vikash", "lucky", "anup", "lala"];
let m = l.map((val) => val.toUpperCase());
console.log(m);

let n = [
  { first: "Rakesh", last: "sharma" },
  { first: "ashish", last: "sharma" },
  { first: "sachin", last: "sharma" },
  { first: "vikash", last: "sharma" },
  { first: "lucky", last: "sharma" },
  { first: "anup", last: "sharma" },
  { first: "lala", last: "sharma" },
];
let o = n.map((user) => user.first + " " + user.last);
let p = n.map((users) => ({
  FIRST: users.first.toUpperCase(),
  LAST: users.last.toUpperCase(),
}));
console.log(o);
console.log("All are in a line", p);

// Sum of numbers

// What: Add all numbers together into one total.

// Why: Classic reduce use; accumulator starts at 0 and keeps adding.

let q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let r = q.reduce((acc, num) => acc + num, 0);
console.log(r);

// Frequency count (occurrence of each value)

// What: Count how many times each item appears.

// Why: Build an object map in one pass.

let s = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
];
let t = s.reduce((acc, num) => {
  acc[num] = acc[num] ?? 0 + 1;
  return acc;
}, {});
console.log(t);

// Task: divide(a, b) likho. Agar a ya b number na ho to TypeError, agar b === 0 ho to RangeError throw karo. Try/catch se call karke message dikhayo.
function divide(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("a and b must be numbers");
    }
    if (b === 0) {
      throw new RangeError("b cannot be 0");
    }
    return a / b;
  } catch (e) {
    console.log(e.message);
   return null ; 
  }
}



// Task: getUserCity(user) jo user.address.city return kare; agar beech me kuch missing ho to Error throw karo “Invalid shape: user.address.city required”.
function getUserCity(user) {
  if (!user || !user.address || !user.address.city) {
    throw new Error("Invalid shape: user.address.city required");
  }
  return user.address.city;
}
// catch (e) {
//   console.error(e.message);
  // return null;
// }




// Task: Ek function runTask(cb) jo start me “start”, end me “end” log kare—chahe cb error throw kare. finally me cleanup karo.function 
function runTask(cb){
    try{
        console.log("start");
        cb();
        console.log("end");
    }catch(e){
        console.error(e.message);
    }finally{
        console.log("cleanup");
    }
}



// Task: risky() andar se known TypeError handle karo; baaki errors ko rethrow karo taaki outer handler pakde.

//   


  let outer = function outer (){
    let b = "saka";
    console.log(b );
    function inner(){
        console.log( "inner",b);
    }
    function inner2(){
      console.log( "inner2",b);
    }    
inner();
inner2(); 
  } 

  outer();