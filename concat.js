let a = [1,2,3,4,5];
let b = ['a','b','c'];

let concatenated_array = b.concat(a);
console.log("Concatenated Array " +concatenated_array);

console.log(a.toString());
console.log(typeof(a));
console.log(Array.isArray(a));
console.log(a instanceof Array);