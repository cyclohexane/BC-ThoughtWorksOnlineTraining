'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let sameElements=[];
    for(let m=0;m<collectionA.length;m++){
        for(let n=0;n<collectionB.length;n++){
            if(collectionA[m]==collectionB[n]){
                sameElements.push(collectionA[m]);
            }
        }
    }
  return sameElements;
}
