'use strict';

module.exports = function countSameElements(collection) {
    let result = new Map();
    collection.forEach(i =>{
        let [key,,count] = [...i];
        count = count ? parseInt(count) : 1;
        result.set(key, result.has(key) ? result.get(key) + count:count);
    });
    return Array.from(result).map(i => {return {key:i[0], count:i[1]}});
}