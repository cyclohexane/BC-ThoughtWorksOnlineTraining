/*题目：找出只含素因子3，5，7 的第 k 大的数。*/

module.exports = function main(n){
    let arr = [3, 5, 7];
    let [M3, M5, M7] = [0, 0, 0];
    let k = [1];
    for(let i = 0; i < n + 1; i ++){
        k.push(Math.min( k[M3] * 3, k[M5] * 5, k[M7] * 7));
        if (k[i + 1] === k[M3] * 3)  M3 ++;
        if (k[i + 1] === k[M5] * 5)  M5 ++;
        if (k[i + 1] === k[M7] * 7)  M7 ++;
    }
    return k[n];
}