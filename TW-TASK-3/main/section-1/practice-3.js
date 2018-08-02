'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    let sameElements=[];
    for(let i=0;i<collectionA.length;i++){
        if(objectB.value.indexOf(collectionA[i])!=-1){
            sameElements.push(collectionA[i]);
        }
    }
  return sameElements;
}
