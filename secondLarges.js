const secondLargestNo = (no) => {
    const largest = no.sort((a,b) => b-a)
    return largest[1]
}
console.log('secondLargestNo',secondLargestNo([11,1,2,3,44,5,6,7]))