'use strict';
var number_map_to_word_over_26 = function(collection){
    return collection.map(i=>{
        if(i<=26){
            return String.fromCharCode(i+96);
        }else{
            let remainder = i%26;
            let multiple = (i-remainder)/26;
            return String.fromCharCode(multiple+96)+String.fromCharCode(remainder+96);
        }
    });
};

module.exports = number_map_to_word_over_26;
