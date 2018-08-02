'use strict';

module.exports = function countSameElements(collectionA,collectionB) {
    let collectionC = new Map();
    collectionA.forEach(i =>{
        let [key,,count] = [...i];
        count = count ? parseInt(count) : 1;
        collectionC.set(key, collectionC.has(key) ? collectionC.get(key) + count:count);
    });
    collectionC = Array.from(collectionC).map(i => {return {key:i[0], count:i[1]}});
    return collectionC.map(i =>{
        if(collectionB.value.includes(i.key)){
            i.count -= Math.floor(i.count/3);
        }
        return i;
    });
}