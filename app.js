// console.log("hello world");

// Count down from 10 to 1.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Output odd numbers from 1 to 10.
// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// Output even numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Output multiples of 3, starting at 6 and ending at 60.
// for (let i = 6; i <= 60; i += 3) {
//   console.log(i);
// }

// Output an increasing number of # symbols, from 1 to 7, as shown below.
// let output = "sting";
// for (let i = 1; i <= 7; i++) {
//   output += "#";
//   console.log(output);
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// const str = "Hello World";

// for (const i in str) {
//   console.log(str[i]);
// }

// const str = "Hello World";

// for (const c of str) {
//   console.log(c);
// }

// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "r") {
//     break;
//   }

//   console.log(str[i]);
// }

// let x = 30;

// while (x > 0) {
//   x /= 2;
//   x--;

//   if (x % 1 != 0) {
//     break;
//   }

//   console.log(x);
// }

// Count down to 0 from a given number.
// let x = 10;
// while (x > 0) {
//   x--;
//   console.log(x);
// }

// Log integers in multiples of 3 as long as they are less than 35.
// let x = 0;
// while (x <= 35) {
//   x += 3;
//   if (x === 36) {
//     break;
//   }
//   console.log(x);
// }

// Print integers in multiples of 5 as long as they are less than 100.
// let x = 0;
// while (x < 100) {
//   x += 5;
//   console.log(x);
// }

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

// let x = 0;
// while (x < 20) {
//   if (x % 2 === 0) {
//     console.log(x * 3);
//   }
//   x++;
// }

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.
// let cost = 4;
// let bill = 10;
// let change = bill - cost;
// let quarters = 0;

// while (change >= 0.25) {
//   change -= 0.25;
//   quarters++;
// }

// console.log("Quarters received:", quarters);

// let x = 30;

// while (x > 0) {
//   x /= 2;
//   x--;

//   if (x % 1 != 0) {
//     break;
//   }

//   console.log(x);
// }

// let x = 1;
// let y = 1;

// myLoop: while (true) {
//   console.log(`Outer loop ${x}.`);
//   x++;

//   while (true) {
//     console.log(`Inner loop ${y}.`);
//     y++;

//     if (x == 5 && y % 5 == 0) {
//       break myLoop;
//     } else if (y % 5 == 0) {
//       continue myLoop;
//     }
//   }
// }

// let x = 10;

// do {
//   x--;
//   console.log(x);
// } while (x > 50);

// let x = 1;
// let y = 1;

// myLoop: while (true) {
//   console.log(`Outer loop ${x}.`);
//   x++;

//   while (true) {
//     console.log(`Inner loop ${y}.`);
//     y++;

//     if (x == 5 && y % 5 == 0) {
//       break myLoop;
//     } else if (y % 5 == 0) {
//       break;
//     }
//   }
// }
