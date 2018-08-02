const main = require('../8-19.js');

describe('数组去重', () => {
  
  it('测试一', () => {

    let result = main(['s', 'a', 's', 'b', 'a',1,'1',1]);

    expect(result).toEqual(['s', 'a', 'b',1,'1']);
  });

});