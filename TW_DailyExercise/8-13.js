/*题目：给定一个未排序的整数数组，找到其中位数。*/

module.exports = function main(arr){
    arr = arr.sort((a,b) => a - b);
    return (arr[parseInt(arr.length / 2)] + arr[parseInt((arr.length - 1) / 2)]) / 2;
}