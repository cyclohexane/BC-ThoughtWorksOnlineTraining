'use strict';
function one_add_next_multiply_three(collection){
   let result = collection.map((i,p)=>{
    if(p<collection.length-1){              //*
      return (i+collection[p+1])*3;
    }
  })
  result.pop();
  return result;
}
module.exports = one_add_next_multiply_three;
