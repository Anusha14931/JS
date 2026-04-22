arr = [1,3,2,3,5,3,5];
arr.sort((a,b)=> a-b);
console.log("sorted array "+arr);


let result = arr.filter((val,i,original) =>{
    return val != original[i+1];
})

console.log(result);
