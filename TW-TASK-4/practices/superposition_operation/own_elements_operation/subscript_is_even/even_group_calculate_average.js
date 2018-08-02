'use strict';
var even_group_calculate_average = function(collection){
    let even = [];
    let sum = [0,0,0,0,0,0];                            //储存每组数字的和以及每组数字的个数
    let result = [];
    for(let i = 1;i<collection.length;i += 2){          //用+=2选出第偶数个元素
        if(collection[i]%2 === 0){
            even.push(collection[i]);
        }
    }
    if(even.length === 0){
        even = [0];                                     //第偶数个元素中不含有偶数时
    }
    while(even.length){
        let i = even.shift();
        if(i<10){
            sum[0] += 1;
            sum[1] += i;
        }else if(i<100){
            sum[2] += 1;
            sum[3] += i;
        }else{
            sum[4] += 1;
            sum[5] += i;
        }
    }
    sum[0] > 0?result.push(sum[1]/sum[0]):sum[0] = 0;
    sum[2] > 0?result.push(sum[3]/sum[2]):sum[2] = 0;
    sum[4] > 0?result.push(sum[5]/sum[4]):sum[4] = 0;
    return result;
};
module.exports = even_group_calculate_average;
