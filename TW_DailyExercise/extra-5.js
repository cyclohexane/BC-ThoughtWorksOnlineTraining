/*题目：给出一组非负整数，重新排列他们的顺序把他们组成一个最大的整数。*/

module.exports = function main(arr){
    for(let i = 0; i < arr.length; i ++){
        for(let x = 1; x < (arr.length-i); x++){
            [arr[x-1], arr[x]] = cmp(arr[x-1], arr[x]);
        }
    };
    return Number(arr.join(''));
}

function cmp(a,b){
    return [b, a].join('') > [a, b].join('') ? [b, a] : [a, b];
}