const main = require('../8-9.js');

describe('查找斐波纳契数列中的某个数', () => {

  it('测试一', () => {

    let result = main(5);

    expect(result).toEqual(3);
  });

  it('测试二', () => {

    let result = main(8);

    expect(result).toEqual(13);
  });
});