'use strict';

function grouping_count(collection) {
  //方法一
  let nmb = collection.filter((i,p)=>collection.indexOf(i,p+1) === -1);
  let result = {};
  for(let i of nmb){
    result[i] = 0;
  }
  for(let i of collection){
    result[i] += 1;
  }

/*方法二
  let result = {};
  while(collection.length){
    let i = collection.shift();
    if(result[i] == undefined){
      result[i] = 1;
    }else{
      result[i] += 1;
    }
  }
  */
  
  return result;
}

module.exports = grouping_count;
