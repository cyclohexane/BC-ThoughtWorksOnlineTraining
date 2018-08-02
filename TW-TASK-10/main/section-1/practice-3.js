'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(i => collectionB.value.includes(i));
}
