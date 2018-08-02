const main = require('../extra-3.js');

describe('求第n个丑数', () => {
  
  it('测试一', () => {

    let result = main(1);

    expect(result).toEqual(1);
  });

  it('测试二', () => {

    let result = main(7);

    expect(result).toEqual(8);
  });

  it('测试三', () => {
    
        let result = main(10);
    
        expect(result).toEqual(12);
      });

});