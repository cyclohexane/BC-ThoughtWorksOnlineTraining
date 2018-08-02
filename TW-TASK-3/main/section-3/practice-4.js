'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	let obj = {};
	let collectionC = [];
	for(let m = 0;m<collectionA.length;m++){
		if(collectionA[m].length == 1){
			if(typeof obj[collectionA[m]] === "undefined"){
				obj[collectionA[m]] = 1;
			}else{
				obj[collectionA[m]] += 1;
			}
		}else{
			obj[collectionA[m].substring(0,1)] = parseInt(collectionA[m].substring(collectionA[m].length-1));
		}
		}
	for(let p in obj){
		collectionC.push({key:p,count:obj[p]});
	}
	for(let i =0;i<collectionC.length;i++){
		if(objectB.value.indexOf(collectionC[i].key) != -1){
			let rmd = collectionC[i].count % 3;
			collectionC[i].count -= (collectionC[i].count - rmd)/3;
		}
	}
  return collectionC;
}