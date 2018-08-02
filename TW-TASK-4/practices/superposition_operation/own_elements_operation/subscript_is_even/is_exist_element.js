'use strict';
var is_exist_element = function(collection,element){
    if(collection.filter(i=>collection.indexOf(i)%2 === 0).find(i=>i === element)){
        return true;
    }else{
        return false;
    }
};
module.exports = is_exist_element;
