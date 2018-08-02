'use strict';
function rank_by_two_large_one_small(collection){
  collection = collection.sort((a,b)=>a-b);
  let result = [];
  for(let i = 0;i<collection.length;i+=3){
    let group = collection.slice(i,i+3);      //end处的元素不会被包括进去
    if(group.length === 3){
      group.push(group.shift());              //在切片中将首个元素插入到尾部
    }
    result = result.concat(group);
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
