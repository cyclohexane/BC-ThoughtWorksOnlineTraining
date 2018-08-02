const main = require('../8-22.js');

describe('计算两个数组的交数组', () => {
  
  it('测试一', () => {

    let result = main([1, 2, 2, 1],[2, 2]);

    expect(result).toEqual([2, 2]);
  });

  it('测试二', () => {

    let result = main([1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 0, 0, 6, 7, 8, 9]);

    expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
  });

});