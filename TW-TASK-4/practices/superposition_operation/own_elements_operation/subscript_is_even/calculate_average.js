'use strict';
var calculate_average = function(collection){
    let sum = 0;
    let even = 0;
    for(let i = 1;i<collection.length;i++){
        if((i+1)%2 == 0){
            even += 1;
            sum += collection[i];
        }
    }
    return (Math.ceil(sum/even));
};
module.exports = calculate_average;
