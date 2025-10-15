let marks = [ 85,97,44,37,76,60];
let sum = 0;
for(let i of marks)sum += i;

let average = sum/marks.length;
console.log(average);

// Task: Make an array of 5 numbers and print first and last item.
 let n = [1,2,3,4,5];
 console.log([0]);
 console.log(n.length-1);
//  n.length-1 last item ka index batata hai means ki kisi array ki last item ka index hamesha uski
//  length -1 hota hai


//  Task: Change the 3rd item to 999 and print array.
    n[2] = 999; 
    console.log(n);

    // Task: Add 100 at end, then remove last item and print both steps yja push koi number add krne k liye
    //  use hota hai aur pop last item remove krne k liye use hota hai
    n.push(100);
    console.log(n);
    n.pop();
    console.log(n);

    // Task: Add 0 at start, then remove first item and print both steps unshift se start me add krte hai aur
    //  shift se start ka item remove krte hai
    n.unshift(0);
    console.log(n);
    n.shift();
    console.log(n);

    //  Find total sum using a for loop take  a new loop 
    let  ns = [10,20,30,40,50];
    let sums = 0;
    for(let i of ns)sums += i;
    console.log(sums);


    // Task: Find average with a loop avg nikalne ke liye sum ko length se divide krte hai
    let avg = sums/ns.length;
    console.log(avg);

    // Task: Count how many odd numbers are in the array. count ka use krke pata karte hai
    //  kitne odd numbers hai mtlb ki ye hai count ka use hai ki kisi cheez ko ginna kisi bhi array me  
    let count = 0;
    for(let i of ns){
        if(i%2!==0)count++;
    }   
    console.log(count);


// Task: Print maximum and minimum values. max and min dono capital letter se start hote hai 
let max = Number.MIN_VALUE;
let min = Number.MAX_VALUE;     
console.log(max);
console.log(min);   

// Task: Print elements from end to start
for(let i = ns.length-1; i>=0; i--){
    console.log(ns[i]);
}

// Task: Reverse the array by swapping.      swap krne k liye temp variable use krte hai swapping kisko bolta hai ye bhi pata hona chahiye
// swapping us process ko bolte hai jisme hum do variable ki value ko ek dusre se exchange krte hai 
for(let i = 0; i<ns.length/2; i++){
    let temp = ns[i];
    ns[i] = ns[ns.length-1-i];
    ns[ns.length-1-i] = temp;
    console.log(ns);
}   

// Task: Copy all items from a to b using loop. yha pe a aur b do array hai jisme a me kuch items hai aur b empty
//  hai push  ka use krke a ke sare items b me copy  ho jayenge

let a = [1,2,3,4,5];
let b = [];
for(let i of a)b.push(i);
console.log(b); 

// Task: Count how many times 3 appears.
 let c = [1,2,3,4,3,5,3,6,3];
 let count3 = 0;
    for(let i of c){
        if(i===3)count3++;
    }   
    console.log(count3);


    // Task: Create new array without 0s push ka use krke ek naya array bana rhe hai jisme 0 nahi hoga    
    let d = [0,1,2,0,3,4,0,5];
    let e = []; 
    for(let i of d){
        if(i!==0)e.push(i);
    }   
    console.log(e);

    // Task: Append all elements of b to a new array c
    let f = [1,2,3];
    let g = [4,5,6];
    let h = [];     
    for(let i of f)h.push(i);
    for(let i of g)h.push(i);   
    console.log(h);
// for a given  array with price of 5 items [ 250 ,654,300,900,50] all items have an offer of 10% discount on them .change the array to store final price after applying offer 
let prices = [250,645,300,900,50 ];
for(let i = 0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i]*10)/100;
}   
console.log(prices);
    //  create an array to store comapnies bloomberg , microsoft, uber , google , IBM, netflix 
    // remove first company from the array
    // remove uber & add ola in place 
    // add amaxon at the end 
let companies = ["bloomberg","microsoft","uber","google","IBM","netflix"];
companies.shift();
console.log(companies);
companies[1] = "ola";
console.log(companies);
companies.push("amazon");
console.log(companies);


let array = [2,3,4,5,6,7,8,9,10];
let news = array.push(11,12,13,14,15);
console.log(array);
// for(let i of array){
//     array.push(i);
// // let ie = 0;
// let ie = array.push(1,2,3,34,4,);
// console.log(ie);

// filter for numbers divisible by 10 from a given array 
let arr = [10,23,45,60,90,34,70,100,120];
let divisibleBy10 = [];
for(let i of arr){
    if(i%10===0)divisibleBy10.push(i);
}   
console.log(divisibleBy10);

// // keep adding numbers to the array  that is given until 0 is added to the array
//  let  arre = [ 31,32,33,34,35];
// while (true) {
//   let num = Number(prompt("Number dalo (0 to stop):"));
//   if (num === 0) break;
//   arre.push(num);
// }
// console.log(arre);

// ye questiom samjh nhi aya 







