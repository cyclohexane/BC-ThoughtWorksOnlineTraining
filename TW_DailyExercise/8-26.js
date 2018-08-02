/*给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.*/

function main(n){
    for(let i = 1; i <= n; i ++){
        let str = [];
        if(i % 3 !== 0 && i % 5 !== 0){         
            str.push(i);
        }else{
            i % 3 === 0 ? str.push('fizz') : str;
            i % 5 === 0 ? str.push('buzz') : str;
        }
        console.log(str.join(' '));
    }
}

main(40);