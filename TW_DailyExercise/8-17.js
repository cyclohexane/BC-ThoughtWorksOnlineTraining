/*为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
要求：不要使用for，while循环*/

module.exports = function main(arr){
    return arr.map(i => i*i);
}