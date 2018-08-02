const main = require('../8-20.js');

describe('判断一个字符串中出现次数最多的字符', () => {
  
  it('测试一', () => {

    let result = main('abcsbaddbizdbas');

    expect(result).toEqual({b:4});
  });

  it('测试二', () => {

    let result = main('aaaaabbdbdbb');

    expect(result).toEqual({a:5,b:5});
  });

});