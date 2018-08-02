const main = require('../8-17.js');

describe('为数组 arr 中的每个元素求二次方', () => {
  
  it('测试一', () => {

    let result = main([5, 3, 7, 1]);

    expect(result).toEqual([25, 9, 49, 1]);
  });

  it('测试二', () => {

    let result = main([2,11,4,5,1]);

    expect(result).toEqual([4,121,16,25,1]);
  });

});