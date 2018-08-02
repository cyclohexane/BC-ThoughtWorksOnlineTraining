/*不借助第三个变量，实现两个整数的替换*/

module.exports = function main(a,b){
    a ^= b;
    b ^= a;
    a ^= b;
    return [a, b];
}