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
	        	sameElements[item] += 1;
	        }
		}else if(item.length == 3){
	        if(typeof sameElements[item.substring(0,1)] === 'undefined'){
			sameElements[item.substring(0,1)] = parseInt(item.substring(item.length-1));
	        }else{
			let add = parseInt(item.substring(item.length-1));
			sameElements[item.substring(0,1)] += add;
			}
		}else{
			let add = parseInt(item.substring(2,item.length-1));
			sameElements[item.substring(0,1)] += add;
		}
	}
	for(let p in sameElements){
        arr.push({name:p,summary:sameElements[p]});
    }
	return arr;
}