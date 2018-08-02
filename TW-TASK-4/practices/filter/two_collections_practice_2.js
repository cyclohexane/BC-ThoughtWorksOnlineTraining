'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  for(let i = 0;i<collection_a.length;i++){               //两个都用for-of的话，会少去除一个'e'
    for(let x = 0;x<collection_b.length;x++){
      if(collection_b[x].indexOf(collection_a[i]) != -1){
        collection_a.splice(i,1);
      }
    }
  }
  return collection_a;
}

module.exports = choose_no_common_elements;
