const main = require('../extra-6.js');

describe('找到字符串中漏掉的数字', () => {
  
  it('测试一', () => {

    let result = main('19201234567891011121314151618');

    expect(result).toEqual(17);
  });

  it('测试二', () => {

    let result = main('19201234567891011171314151618');

    expect(result).toEqual(12);
  });

});