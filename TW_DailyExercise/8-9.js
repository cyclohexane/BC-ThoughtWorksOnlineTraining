/*题目：查找斐波纳契数列中第 N 个数。
所谓的斐波纳契数列是指：
前2个数是 0 和 1 。
第 i 个数是第 i-1 个数和第i-2 个数的和。*/

module.exports = function main(n){
    let arr = [0, 1];
    if(n > 2){
        for(let i = 2; i < n; i ++){
            arr[i] = arr[i - 2]+arr[i - 1];
        }
    }
    return arr[n - 1];
}