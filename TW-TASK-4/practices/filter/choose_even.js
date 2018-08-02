'use strict';

function choose_even(collection) {
  return collection.filter(i=>i%2 == 0);
}

module.exports = choose_even;
