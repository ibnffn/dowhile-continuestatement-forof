// do while loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
// result
// 0
// 1
// 2

let p = 0;
do {
  console.log(p);
  p++;
} while (p < 3);
// result
// 0
// 1
// 2

// contoh 2
let q = 5;
do {
  console.log(q);
  q++;
} while (q < 5);
// result
// 5

// Continue Statement - longkap 2 dimulai dari angka 1
for (let x = 0; x < 10; x++) {
  if (x % 2 === 0) continue;
  console.log(x);
}
// result
// 1
// 3
// 5
// 7
// 9

// For of - array
const numbers = [100, 200, 300];
for (const number of numbers) {
  console.log(number);
}
//result :
//100
//200
//300

// For of - String
const alphabet = "abcd";
for (const character of alphabet) {
  console.log(character);
}
// result
//a
//b
//c
//d

// for of - new set
const list = new Set([1, 1, 2]);
for (const item of list) {
  console.log(item);
}
// result
//1
//1
//2

// for of - new map / list array
const keyvalpairs = new Map([
  ["a", 1],
  ["B", 2],
  ["c", 3],
]);
for (const [key, value] of keyvalpairs) {
  console.log(`key = ${key}, value= ${value}`);
}
// result
// key = a, value= 1
// key = B, value= 2
// key = c, value= 3
