const main = require('../8-24.js');

describe('在字符串前拼指定字符到固定长度', () => {
  
  it('测试一', () => {

    let result = main('hello',20,'1');

    expect(result).toEqual('111111111111111hello');
  });

  it('测试二', () => {

    let result = main('abcdefghigklmn',5,'z');

    expect(result).toEqual('abcdefghigklmn');
  });

});