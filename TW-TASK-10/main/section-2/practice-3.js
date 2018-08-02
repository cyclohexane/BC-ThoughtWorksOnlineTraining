'use strict';

module.exports = function countSameElements(collection) {
    let result = new Map();
    collection.forEach(i =>{
        let [key,...count] = [...i];
        count = count.length !== 0 ? parseInt(count.join('').replace(/[^0-9]/ig,'')) : 1;
        result.set(key, result.has(key) ? result.get(key) + count:count);
    });
    return Array.from(result).map(i => {return {name:i[0], summary:i[1]}});
}
//觉得这题多出一个新格式(h[3])应该不是专门为了考按length分类，所以尝试了这样的做法。不知还有别的做法吗？