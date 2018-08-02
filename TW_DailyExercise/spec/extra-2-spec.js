const main = require('../extra-2.js');

describe('将下划线式字符串转为驼峰式', () => {
  
  it('测试一', () => {

    let result = main('student_score');

    expect(result).toEqual('studentScore');
  });

  it('测试二', () => {

    let result = main('student_average_score');

    expect(result).toEqual('studentAverageScore');
  });

});