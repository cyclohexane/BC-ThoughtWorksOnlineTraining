'use strict';
var calculate_median = function(collection){
    let col = [];
    collection.forEach(i =>{
        if(i%2 === 0){
            col.push(i);
        }
    })
    col = col.sort((a,b) => a - b);
    return (col[parseInt(col.length / 2)] + col[parseInt((col.length - 1) / 2)]) / 2;
};
module.exports = calculate_median;
