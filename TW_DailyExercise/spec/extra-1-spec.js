const main = require('../extra-1.js');

describe('找出只含素因子3、5、7的第k大的数', () => {
  
  it('测试一', () => {

    let result = main(1);

    expect(result).toEqual(3);
  });

  it('测试二', () => {

    let result = main(4);

    expect(result).toEqual(9);
  });

  it('测试三', () => {

    let result = main(6);

    expect(result).toEqual(21);
  });
});