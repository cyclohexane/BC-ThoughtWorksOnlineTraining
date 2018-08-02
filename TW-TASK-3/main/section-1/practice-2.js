'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let sameElements=[];
    for(let m=0;m<collectionA.length;m++){
        for(let n=0;n<collectionB.length;n++){
            for(let i=0;i<collectionB[n].length;i++)
            if(collectionA[m]==collectionB[n][i]){
                sameElements.push(collectionA[m]);
            }
        }
    }
  return sameElements;
}
