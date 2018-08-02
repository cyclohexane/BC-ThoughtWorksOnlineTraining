'use strict';

function compute_chain_median(collection) {
  let result = collection.split('->').map(i=>parseInt(i));
  result = result.sort((a,b)=>a-b);
  let x = result.length;
  if(x%2 === 0){
    return ((result[x/2-1]+result[x/2+1-1])/2);
  }else{
    return result[(x+1)/2-1];
  }
}

module.exports = compute_chain_median;
