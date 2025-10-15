//  se 10 tak numbers print karo (for).
let i = 0;
for (; i <= 10; i++) {
  console.log(i);
}

// 10 se 1 tak reverse print karo (for).
let j = 10;
for (j = 10; j >= 0; j--) {
  console.log(j);
}

// 1 se 100 tak even numbers print karo.
let k = 0;
for (k = 0; k <= 100; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
}

// 1 se 100 tak odd numbers print karo.
let l = 0;
for (; l <= 100; l++) {
  if (l % 2 !== 0) {
    console.log(l);
  }
}

//   1 se 100 taak even numbers ka sum nikalo
let m = 0;
let sum = 0;
for (; m <= 100; m++) {
  if (m % 2 === 0) {
    sum += m;
  }
}
console.log(sum);

// 1 se 100 taak odd numbers ka sum nikalo
let n = 0;
let sum1 = 0;
for (; n <= 100; n++) {
  if (n % 2 !== 0) {
    sum1 += n;
  }
}
console.log(sum1);

// given n, 1 se n  taak ka product (factorial style me) print karo
let o = 1;
for (let i = 1; i <= n; i++) {
  o *= i;
}
console.log(o);

// Ek array ke sab elements ko print karo (for).
let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= p.length - 1; i++) {
  console.log(p[i]);
}

// Ek array ke sab elements ka total sum nikaalo (for).
let q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum2 = 0;
for (let i = 0; i <= q.length-1; i++) {
  sum2 += q[i];
}
console.log(sum2);

// Array ka maximum element dhoondo (for). 
let r = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let max= 0;
for (let i = 0; i <= r.length-1; i++) {
  if (r[i]>max) {
    max = r[i];
  }
}
console.log(max);


// Array ka minimum element dhoondo (for). 
let s = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let min= s[0];
for (let i = 0; i <= s.length-1; i++) {
  if (s[i]<min) {
    min = s[i];
  }
}
console.log(min);


// for...of se array elements print karo. 
let t = [1,2,3,4,5,6,7,8,9,10];
for (let i of t) {
  console.log(i);
}


// while loop se 1 se 10 print karo. 
let u = 1;
while (u <= 10) {
  console.log(u);
  u++;
} 

// do  while loop se 10 se 1 print karo. 
let v = 10;
do {
  console.log(v);
  v--;
} while (v >= 1);
// 


