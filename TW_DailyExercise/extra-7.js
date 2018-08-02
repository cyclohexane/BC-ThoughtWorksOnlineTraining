/*题目：给出一个字符串数组，按照anagram进行分组*/

module.exports = function main(arr){
    let result = [];
    newArr = arr.map(i => i.split('').sort().join(''));
    newArr.filter( (i,p) =>{
        if(newArr.indexOf(i) === p){
            let index = [];
            newArr.filter( (item,position) =>{
                if(item === i){
                    index.push(position);
                }
            })
            result.push(index);
        }
    })
    result.forEach((i,p1) =>{
        i.forEach( (index,p2) =>{
            result[p1][p2] = arr[index];
        });
        i.sort();
    });
    return result;
}