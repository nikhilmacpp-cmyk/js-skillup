// set and map
const newMap = new Map();
newMap.set('a',[1,2,3]);
newMap.set('b',2);
newMap.set('c',3);
console.log('newMap', newMap.get('a'));
console.log('newMap', newMap.size);
console.log('newMap', newMap.has('a'));
console.log('newMap', newMap.delete('a'));
console.log('newMap', newMap);
const newSet = [1,2,3,4,4,5,5,5,6];
const uniqueSet = [...new Set(newSet)];
console.log('uniqueSet',uniqueSet)