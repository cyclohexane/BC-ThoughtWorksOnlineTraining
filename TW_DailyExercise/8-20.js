/*判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}*/

module.exports = function main(arr){
    let [item,count,result] = [[],[],{}];
    arr = arr.split('');
    item = arr.filter( (i,p) => arr.indexOf(i) === p);
    arr.forEach(i => count[item.indexOf(i)] ++ || (count[item.indexOf(i)] = 1));
    count.forEach( (i,p) =>{
        if(i === Math.max.apply(null, count)){
            result[item[p]] = i;
        }
    });
    return result;
}