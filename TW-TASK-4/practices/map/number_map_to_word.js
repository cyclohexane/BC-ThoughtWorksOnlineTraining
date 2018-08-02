'use strict';
var number_map_to_word = function(collection){
    return collection.map(i=>{
         return String.fromCharCode(i+96);
    });
};

module.exports = number_map_to_word;
