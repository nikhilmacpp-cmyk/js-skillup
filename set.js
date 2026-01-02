// // set and map
// const newMap = new Map();
// newMap.set('a',[1,2,3]);
// newMap.set('b',2);
// newMap.set('c',3);
// console.log('newMap', newMap.get('a'));
// console.log('newMap', newMap.size);
// console.log('newMap', newMap.has('a'));
// console.log('newMap', newMap.delete('a'));
// console.log('newMap', newMap);
// const newSet = [1,2,3,4,4,5,5,5,6];
// console.log('newSet',new Set(newSet))
// const uniqueSet = [...new Set(newSet)].length;
// console.log('uniqueSet',uniqueSet)
// // How would you check if two arrays have at least one common element using a Set?
// const a = new Set([1,2,3,4]);
// const b = new Set([1,2,3,4]);
// console.log(a.has(1) && b.has(1));
// Objects
const parent = { a: 1 };
const child = {};

Object.setPrototypeOf(child, parent);

console.log('child',child)
console.log('child',child.a)
console.log('parent',parent)
