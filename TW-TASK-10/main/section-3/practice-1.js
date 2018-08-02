'use strict';

module.exports = function createUpdatedCollection(collectionA, collectionB) {
    return collectionA.map(i =>{
        if(collectionB.value.includes(i.key)){
            i.count --;
        }
        return i;
    });
}
