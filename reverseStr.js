
const reverseStr = (name) => {
    const splitstr= name.split('');
    const reverseStr = splitstr.reverse().join('');
    return reverseStr;
}

console.log(reverseStr("Nikhil"));