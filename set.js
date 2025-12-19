// set
const newMap = new Map();
newMap.set('a',[1,2,3]);
newMap.set('b',2);
newMap.set('c',3);
console.log('newMap', newMap.get('a'));
console.log('newMap', newMap.size);
console.log('newMap', newMap.has('a'));
console.log('newMap', newMap.delete('a'));
console.log('newMap', newMap);