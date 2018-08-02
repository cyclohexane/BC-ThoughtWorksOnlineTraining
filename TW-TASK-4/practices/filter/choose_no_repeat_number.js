'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((i,p)=>collection.indexOf(i,p+1) === -1);
}

module.exports = choose_no_repeat_number;