const main = require('../8-11.js');

describe('删除链表中指定数字', () => {
  
  it('测试一', () => {

    let result = main('1->2->3->3->4->5->3', 3);

    expect(result).toEqual('1->2->4->5');
  });

  it('测试二', () => {

    let result = main('6->5->2->6->4->4', 6);

    expect(result).toEqual('5->2->4->4');
  });
  
});