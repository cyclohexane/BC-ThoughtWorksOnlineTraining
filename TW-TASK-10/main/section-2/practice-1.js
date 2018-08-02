'use strict';

module.exports = function countSameElements(collection) {
    let result = new Map();
    collection.forEach(i =>{
        result.set(i, result.has(i) ? result.get(i) + 1 : 1);//这里不能用++？
    });
    return Array.from(result).map(i => {return {key:i[0], count:i[1]}});
     //①为什么一定要return不能省略
     //②为什么map对象转数组会将每个键值对转换为二级数组而不是哈希表...
}