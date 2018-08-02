'use strict';

module.exports = function countSameElements(collection) {
    let sameElements ={};
    let arr = [];
    for(let i=0;i<collection.length;i++){
        if(typeof sameElements[collection[i]] === 'undefined'){
            sameElements[collection[i]]=1;
        }else{
            sameElements[collection[i]]++;
        }
    }
    for(let p in sameElements){
        arr.push({key:p,count:sameElements[p]});
    }
  return arr;
}
