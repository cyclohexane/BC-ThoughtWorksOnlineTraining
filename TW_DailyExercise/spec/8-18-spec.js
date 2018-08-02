const main = require('../8-18.js');

describe('在数组中，查找与某个数值相等的元素出现的所有位置', () => {
  
  it('测试一', () => {

    let result = main([1, 3, 7, 1 ,4],1);

    expect(result).toEqual(`0, 3`);
  });

  it('测试二', () => {

    let result = main([1, 3, 17, 1, 24, 31, 1, 1],1);

    expect(result).toEqual(`0, 3, 6, 7`);
  });

});