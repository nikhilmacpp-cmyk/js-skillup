const removeDuplicate = (arrVal) =>{
    const uniqueSet = [...new Set(arrVal)];
    return uniqueSet;
}
console.log(removeDuplicate([1,2,3,4,4,5,5,6,7,8,8,9,10]));