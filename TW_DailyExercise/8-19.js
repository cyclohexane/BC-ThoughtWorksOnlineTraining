/*题目：数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]*/

module.exports = function main(arr){
    return Array.from(new Set(arr));
}