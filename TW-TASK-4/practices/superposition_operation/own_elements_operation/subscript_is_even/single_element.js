'use strict';
var single_element = function(collection){
    let result = [];
    collection = collection.filter((i,p)=>(p+1)%2 === 0);
    result = collection.filter(i=>collection.indexOf(i)===collection.lastIndexOf(i));
    return result;
};
//一开始的思路是(collection.indexOf(i)+1)%2 === 0，但是如果有重复数字就行不通了

module.exports = single_element;
