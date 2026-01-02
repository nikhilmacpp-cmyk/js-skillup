const palindrome = (text1) =>{
    const text2 = text1.split('').reverse().join('');
if(text1 === text2){
    return `${text1} is a palindrome`;
}else{
    return `${text1} is not a palindrome`;
}
return
}

console.log(palindrome("madamr"));