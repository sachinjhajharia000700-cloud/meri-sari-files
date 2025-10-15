// let i = 2;
// for (; i <=10 ; i++){
//     if(i%2 === 0){
//         console.log(i);

//     }
// }

let i = 2;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// if i want that if user enter correct number then the loop will close 
// and if user enter wrong number 3 times then also the loop will close
// and if user enter wrong number less than 3 times then the loop will continue so write a code for that

let counte = 0;
const maxAttempt = 3;

for (;;) {  
  let num = +prompt("Enter a number greater than 100", "");
  if (num > 100) {
    console.log(num);
    break; // Exit the loop if the input is valid
  } else if (num === null || num === "") {
    console.log("Input cancelled or empty. Exiting...");
    break; // Exit the loop if input is cancelled or empty
  } 
  else 
    counte++;
    if (counte === maxAttempt) {  
      console.log("Too many attempts. Exiting...");
      break; // Exit the loop after reaching max attempt
    } else {
      console.log("Invalid input. Please try again.");
    } 
  }
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
if ( browser === 'Edge' ){
 alert("You've got the Edge!")
}
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
  alert('Okay we support these browsers too')
} 
else {
  alert('We hope that this page looks ok!')
} 



// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
let a =  +prompt ( 'a?','');
switch (a){
  case 0 :
    alert(0);
    break;
 case 1 :
  alert(1);
  break;

  case 2 :
    case 3 :
    alert('2,3');
    break;
}