const main = require('../extra-7.js');

describe('按照变位词分组', () => {
  
  it('测试一', () => {

    let result = main(["eat", "tea", "tan", "ate", "nat", "bat"]);

    expect(result).toEqual([
      ["ate", "eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]);
  });
  
});