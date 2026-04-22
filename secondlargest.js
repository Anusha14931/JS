let arr = [100, 99.9,99,89,101];

arr.sort((a,b) => a- b);

secondlargest = arr[arr.length-2];

console.log("sortedarray " +arr);
console.log(+secondlargest);