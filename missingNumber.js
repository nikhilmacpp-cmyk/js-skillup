const missingNumber = (no,arrNo=[]) =>{
    let missingNo = [];
    for(let i=1;i<=no;i++){
        if(!arrNo.includes(i)){
            missingNo.push(i)
        }
    }
    return missingNo;
}
console.log('output',missingNumber(10,[1,2,3,4,6,7,9,10]));