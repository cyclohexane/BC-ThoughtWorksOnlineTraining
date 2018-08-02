'use strict';

function double_to_one(collection) {
  let result = [];
  collection.find(i=>{
    result = result.concat(i);
  });
  //return result.filter((i,p)=>result.indexOf(i,p+1) === -1);  顺序会乱，为什么？
  return Array.from(new Set(result));   //*
}

module.exports = double_to_one;
