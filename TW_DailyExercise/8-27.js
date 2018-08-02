/*给定编码如下，给出一个整数,返回解码方法的种数；
例如：
给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
1-> 'A’
2-> ‘B’
…
26-> ‘Z’*/

//module.exports = 
function main(num){
    num = num.toString().split('').map(i => Number(i));
    //第一个false是“未与上一个数字结合”，第二个false是“能否与上一个数字结合”
    num = num.map ( (i, p) =>{
        if(p === 0)  return [i, false, false];
        return [i, false, (num[p-1] === 1 || (num[p-1] === 2 && (7 <= i <= 9)) ? true : false)];
    });
}

let test = 172151;
console.log(main(test));


