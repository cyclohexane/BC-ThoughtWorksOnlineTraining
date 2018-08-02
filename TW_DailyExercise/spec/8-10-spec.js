const main = require('../8-10.js');

describe('找出唯一一个只出现一次的数字', () => {
  
  it('测试一（3个数字）', () => {

    let result = main([1,2,2]);

    expect(result).toEqual(1);
  });

  it('测试二（9个数字）', () => {

    let result = main([1,2,20,4,6,1,4,20,6]);

    expect(result).toEqual(2);
  });

});