'use strict';

function median_to_letter(collection) {
  let result = collection.sort((a,b)=>a-b);
  let x = result.length;
  let nmb = 0;
  if(x%2 === 0){
    nmb = Math.ceil((result[x/2-1]+result[x/2+1-1])/2);
  }else{
    nmb = Math.ceil(result[(x+1)/2-1]);
  }
  if(nmb<=26){
    return String.fromCharCode(nmb+96);
  }else{
    let remainder = nmb%26;
    let multiple = (nmb-remainder)/26;
    if(remainder != 0){
      return (String.fromCharCode(multiple+96)+String.fromCharCode(remainder+96));
    }else{
      return (String.fromCharCode(multiple-1+96)+'z'); 
    return remainder;
    }
  }
}
module.exports = median_to_letter;
