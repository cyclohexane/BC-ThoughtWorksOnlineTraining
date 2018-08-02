const main = require('../8-13.js');

describe('找出乱序整数数组的中位数', () => {
  
  it('测试一', () => {

    let result = main([4, 5, 1, 3, 2]);

    expect(result).toEqual(3);
  });
    it('测试二', () => {

    let result = main([5, 2 ,4 ,1, 3, 6]);

    expect(result).toEqual(3.5);
  });
});