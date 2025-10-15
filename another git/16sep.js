let a = function(obj) {
    return obj;
};

console.log(a({
    name: "sachin",
    age: 24,
    city: "pune"
}));

let b = function(arr) {
    return arr;
};
console.log(b(age = [10,15,20,25,30]));



let c = function (laka , saka ) {
    return laka + saka;
}   
console.log(c(100,200));


let d = function (x,y) {
    return x * y;
}   
console.log(d(100000 ,2000000));


let e = function (p,q) {
    prompt("enter a number");
    return p / q;
}   
console.log(e(1000000 ,0));


// Task: Ek function sumTo(n) likho jo 1 se n tak ka sum de
let sunTo = function (n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }           
    return sum; 

}
// Task: countDigits(n) digits ki count return kare, negative handle kare.
let countDigits = function (n) {
    if (n < 0) {
        n = -n; // Make n positive if it's negative
    }   
    if (n === 0) {
        return 1; // Special case for 0
    }   
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    
    }
    return count;}
console.log(countDigits(-12345)); // Output: 5
console.log(countDigits(0));    


// Task: factorial(n) iterative for loop se.
let sachu = function (n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }       
    return fact;
}
console.log(sachu(5)); 
console.log(sachu(0));
console.log(sachu(1));
console.log(sachu(6)); 


// Task: countVowels(str) vowels ki total ginti de 
let vo = function (str) {
    let count = 0;
    let vowels = "aeiouAEIOU";  
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }   
        console.log(count);
    }   
    return count;
}   
console.log(vo("sachin"));
console.log(vo("hello world"));
console.log(vo("xyz"));    


// Input: price=1000, discount=15% (0.15), GST=18% (0.18 what is the price after discount and tax

const finalprice = () => ((1000 - 1000 * 0.15) * 1.18).toFixed(2);

console.log(finalprice());

