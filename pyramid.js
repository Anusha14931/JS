function getPyramid(num){
    for(let i = 1; i<= num;i++){
        let row = "" . repeat(num-1);

        totnumofrows =  2*i-1;


        for(let j = 1;j<=totnumofrows;j++){
            row += j +" ";
        }
        console.log(row);
    }
}

console.log(getPyramid(5));
