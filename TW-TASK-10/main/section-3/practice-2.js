'use strict';

module.exports = function createUpdatedCollection(collectionA, collectionB) {
    return collectionA.map(i =>{
        if(collectionB.value.includes(i.key)){
            i.count -= Math.floor(i.count/3);
        }
        return i;
    });
}