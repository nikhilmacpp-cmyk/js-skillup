const falsyValue = (arr)=>{
    return arr?.filter(Boolean)
}
console.log('output',falsyValue(['',1,2,3,4,undefined,false,null]))
