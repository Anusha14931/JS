let arr1 = [100,5, 10,20,-1];
let smallest = arr1[0];

for(let i = 1; i< arr1.length;i++)
{
    if(arr1[i]<smallest)
    {
        smallest = arr1[i];
    }
}
console.log(smallest);