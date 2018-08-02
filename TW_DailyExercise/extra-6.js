/*给定一个字符串，字符串是由1-20中的数字组成，
但是字符串漏掉了一个数，找到那个数并打印出来。*/

module.exports = function main(arr){
    let diff = [];
    const Num = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    Num.forEach(i =>{
        let index = arr.indexOf(i);
        if(index !== -1){
            arr = arr.slice(0,index).concat(arr.slice(index + i.toString().length));
        }else{
            diff.push(i);
        }
    })
    if(diff.length !== 1){
        diff.sort();
    }
    return parseInt(diff.join(''));
}