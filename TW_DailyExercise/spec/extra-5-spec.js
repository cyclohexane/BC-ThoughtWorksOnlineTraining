const main = require('../extra-5.js');

describe('将一组整数排列成最大的整数', () => {
  
  it('测试一', () => {

    let result = main([1, 20, 23, 4, 8]);

    expect(result).toEqual(8423201);
  });

  it('测试二', () => {

    let result = main([2, 32, 34, 3, 12]);

    expect(result).toEqual(34332212);
  });

});