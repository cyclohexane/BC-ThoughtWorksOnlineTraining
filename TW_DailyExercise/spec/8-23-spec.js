const main = require('../8-23.js');

describe('多维数组化为一维数组', () => {
  
  it('测试一', () => {

    let result = main([1,2,[1,2]]);

    expect(result).toEqual([1,2,1,2]);
  });

  it('测试二', () => {

    let result = main([1,2,[1,2],[3,4]]);

    expect(result).toEqual([1,2,1,2,3,4]);
  });

  it('测试三', () => {

    let result = main([4,[3,[2,[1]]]]);

    expect(result).toEqual([4,3,2,1]);
  });

});