const main = require('../8-8.js');

describe('分解正整数的质因数', () => {
  
  it('测试一', () => {

    let result = main(90);

    expect(result).toEqual('90=2335');
  });

  it('测试二', () => {

    let result = main(24);

    expect(result).toEqual('24=2223');
  });

});
