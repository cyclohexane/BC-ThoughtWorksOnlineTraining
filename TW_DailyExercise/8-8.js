/*题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。*/

module.exports = function main(n){
    let result = ''+ n + '=';
    let i = 2;
    if(n > 1){
        while(i < n){
            if(n % i === 0){
                result += i;
                n /= i;
                i = 2;
            }else{
                i ++;
            }
        }
    }
    result += n;
    return result;
}