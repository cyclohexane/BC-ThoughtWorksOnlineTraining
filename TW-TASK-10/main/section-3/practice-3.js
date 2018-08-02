'use strict';

module.exports = function countSameElements(collectionA,collectionB) {
    let collectionC = new Map();
    collectionA.forEach(i =>{
        collectionC.set(i, collectionC.has(i) ? collectionC.get(i) + 1 : 1);
    });
    collectionC = Array.from(collectionC).map(i => {return {key:i[0], count:i[1]}});
    return collectionC.map(i =>{
        if(collectionB.value.includes(i.key)){
            i.count -= Math.floor(i.count / 3);
        }
        return i;
    });
}