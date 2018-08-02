/*求第n个丑数，所谓丑数，就是那些因子只含2，3，5的数.
1，2，3，4，5，6，8，9，10，12是最前面的10个丑数。(1是特殊的丑数）。*/

module.exports = function main(n){
    let arr = [2, 3, 5];
    let [M2, M3, M5] = [0, 0, 0];
    let k = [1];
    for(let i = 0; i < n + 1; i ++){
        k.push(Math.min( k[M2] * 2, k[M3] * 3, k[M5] * 5));
        if (k[i + 1] === k[M2] * 2)  M2 ++;
        if (k[i + 1] === k[M3] * 3)  M3 ++;
        if (k[i + 1] === k[M5] * 5)  M5 ++;
    }
    let result = n === 1 ? 1 : k[n-1];
    return result;
}