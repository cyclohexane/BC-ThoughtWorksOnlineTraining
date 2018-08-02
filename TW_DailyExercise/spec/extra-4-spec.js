const main = require('../extra-4.js');

describe('不借助第三个变量，实现两个整数的替换', () => {
  
  it('测试一', () => {

    let result = main(1,2);

    expect(result).toEqual([2,1]);
  });

});