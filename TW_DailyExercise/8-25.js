/*将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].*/

module.exports = function main(arr,elem){
    return arr.filter(i => i !== elem).concat(arr.filter(i => i === elem));
}