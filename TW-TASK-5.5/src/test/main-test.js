'use strict';

describe('fizbuzzwhizz', () => {

  let a = 3;
  let b = 5;
  let c = 7;

    it('含第一个值时显示Fizz', () => {
    let result = fizbuzzwhizz(a, b, c, 13);
    expect(result).toEqual('Fizz');
  });

  it('为第一个值的倍数而不含第一个值时显示Fizz', () => {
    let result = fizbuzzwhizz(a, b, c, 6);
    expect(result).toEqual('Fizz');
  });

  it('为第二个值的倍数而不含第一个值时显示Buzz', () => {
    let result = fizbuzzwhizz(a, b, c, 5);
    expect(result).toEqual('Buzz');
  });

    it('为第三个值的倍数而不含第一个值时显示Whizz', () => {
    let result = fizbuzzwhizz(a, b, c, 7);
    expect(result).toEqual('Whizz');
  });

    it('为第一、二个值的公倍数而不含第一个值时显示FizzBuzz', () => {
    let result = fizbuzzwhizz(a, b, c, 15);
    expect(result).toEqual('FizzBuzz');
  });

    it('为第二、三个值的公倍数而不含第一个值时显示BuzzWhizz', () => {
    let result = fizbuzzwhizz(a, b, c, 70);
    expect(result).toEqual('BuzzWhizz');
  });

    it('为第一、三个值的公倍数而不含第一个值时显FizzWhizz', () => {
    let result = fizbuzzwhizz(a, b, c, 21);
    expect(result).toEqual('FizzWhizz');
  });

    it('为三个值的公倍数而不含第一个值时显示FizzBuzzWhizz', () => {
    let result = fizbuzzwhizz(a, b, c, 105);
    expect(result).toEqual('FizzBuzzWhizz');
  });
  
    it('不满足以上条件则显示该数字',()=>{
    let result = fizbuzzwhizz(a, b, c, 16);
    expect(result).toEqual(16);
    
    })
});