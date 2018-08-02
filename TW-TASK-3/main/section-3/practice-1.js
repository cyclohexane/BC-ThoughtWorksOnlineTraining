'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	for(let i = 0;i<collectionA.length;i++){
		if(objectB.value.indexOf(collectionA[i].key)!= -1){
			collectionA[i].count -= 1;
		}
	}
	return collectionA;
}