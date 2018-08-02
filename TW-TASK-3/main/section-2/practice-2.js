'use strict';

module.exports = function countSameElements(collection) {
	let sameElements = {};
	let arr = [];
	for(let i = 0;i<collection.length;i++){
		let item = collection[i];
		if(item.length == 1){
	        if(typeof sameElements[item] === 'undefined'){
	            sameElements[item] = 1;
	        }else{
	        	sameElements[item] ++;
	        }
		}else{
			sameElements[item.substring(0,1)] = parseInt(item.substring(item.length-1));
		}
	}
	for(let p in sameElements){
        arr.push({key:p,count:sameElements[p]});
    }
	return arr;
}