const main = require('../8-25.js');

describe('将数组中所包含的某个元素找出，并放在数组后面', () => {
  
  it('测试一', () => {

    let result = main([0, 1, 0, 3, 12], 0);

    expect(result).toEqual([1, 3, 12, 0, 0]);
  });

});