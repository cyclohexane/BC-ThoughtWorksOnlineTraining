/*题目：找出数组 arr 中重复出现过的元素*/

module.exports = function main(arr){
    arr = arr.filter(i => arr.indexOf(i) !== arr.lastIndexOf(i));
//或 arr = arr.filter((i,p) => arr.indexOf(i,p+1) !== -1);
    return Array.from(new Set(arr));
}