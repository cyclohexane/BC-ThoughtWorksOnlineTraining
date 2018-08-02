const codeList = [':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','||:::'];

function main(input){
    if(input.includes('|')){
        return codeToNumber(input);
    }else{
        return numberToCode(input);
    }
}

function codeToNumber(input){
    input = input.split('');
    input.shift();
    input.pop();
    let code = input.join('');
    code = devideCode(code);
    let num = [];
    code.forEach(i =>{
        num.push(codeList.indexOf(i) + 1);//字符串不能调用splice()，故先将num设置为数组
    });
    if(num.length === 9){
        num.splice(5, 0, '-');
    }
    return num.join('');
}

function devideCode(code){
    let devidedCode = [];
    for(let i = 5; i < code.length; i += 5){
        devidedCode.push(code.slice(i-5, i));
    }
    return devidedCode;
}

function numberToCode(input){
    let num = input.split('');
    if(num.includes('-')){
        num.splice(num.indexOf('-'), 1);
    }
    num.push(calculateCD(num));
    let code = num.map(i => codeList[parseInt(i) - 1]);
    code.unshift('|');
    code.push('|');
    return code.join('');
}

function calculateCD(num){
    let sum = num.map(i => parseInt(i)).reduce((pre,now) => pre + now);
    return (10 - (sum % 10));
}

module.exports = main;