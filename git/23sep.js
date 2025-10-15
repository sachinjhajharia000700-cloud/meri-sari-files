let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.map(num => num * num);
console.log(b);
console.log(a);

let c = ["ashish", "sachin", "vikash", "lucky", "anup", "lala"];
let d = c.map(s => s.toUpperCase());
console.log(d);
console.log(c);


let users = [
    { first: "Rakesh", last: "sharma" },
    { first: "ashish", last: "sharma" },
    { first: "sachin", last: "sharma" },
    { first: "vikash", last: "sharma" },
    { first: "lucky", last: "sharma" },
    { first: "anup", last: "sharma" },
    { first: "lala", last: "sharma" },

];

let e = users.map(user => user.first + " " + user.last);
let f = users.map(users => ({ FIRST: users.first.toUpperCase(), LAST: users.last.toUpperCase() }));

console.log(e);
console.log(f);

let g = [
    {first: "anish", last: "kumar"},
    {first: "kalu", last: "kumari"},
    {first:"veeru",last: "choudhary"}
];
let h = g.map(user => user.first + " " + user.last);
console.log(h);
let i = g.map(users => ({FIRST: users.first.toUpperCase(), LAST: users.last.toUpperCase()}));
console.log(i);