const main = require('../8-16.js');

describe('找出数组中重复出现过的元素', () => {
  
  it('测试一', () => {

    let result = main(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']);

    expect(result).toEqual(['a', 'ed']);
  });

  it('测试二', () => {

    let result = main([1, 15, 4, 8, 20, 21, 4]);

    expect(result).toEqual([4]);
  });

});