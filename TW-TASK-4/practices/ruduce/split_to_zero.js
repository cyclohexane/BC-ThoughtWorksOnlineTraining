'use strict';

function spilt_to_zero(number, interval) {
  let collection = [number];
  let flag = Math.ceil(parseFloat((number%interval).toFixed(10))) === 0 ? true:false;
  while(collection[collection.length-1] >= 0){
    collection.push(parseFloat((number-=interval).toFixed(1)));
  }
  if(flag){
    collection.splice(collection.length-1,1);
  }
  return collection;
}
//小数精度转换：toFixed()，但会转换成字符串类型，所以需要用parseFloat()包裹

module.exports = spilt_to_zero;
