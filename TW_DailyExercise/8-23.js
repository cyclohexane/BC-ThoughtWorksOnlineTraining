/*给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。*/

module.exports = function main(arr) {
    let result = [];
    arr.forEach(i=>{
      result = result.concat(typeof(i) === `number`? i : main(i));
    });
    return result;
}