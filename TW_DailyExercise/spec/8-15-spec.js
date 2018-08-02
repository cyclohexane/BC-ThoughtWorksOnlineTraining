const main = require('../8-15.js');

describe('统计数组中某元素出现的次数', () => {
  
  it('测试一', () => {

    let result = main([1, 3, 7, 1 ,4,], 1);

    expect(result).toEqual(2);
  });

  it('测试二', () => {

    let result = main([5, 9, 4, 2, 7, 8, 4, 6, 7, 4], 4);

    expect(result).toEqual(3);
  });

});