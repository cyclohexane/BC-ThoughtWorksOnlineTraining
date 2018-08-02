'use strict';

function fizbuzzwhizz(a, b, c, p){
    
    //方法一
    if(p.toString().indexOf('3') != -1){
        return 'Fizz';
    }else if(p%a!=0 && p%b!=0 && p%c!=0){         
        return p;
    }else{
        let str = '';
        p%a === 0? str += 'Fizz':str += '';
        p%b === 0? str += 'Buzz':str += '';
        p%c === 0? str += 'Whizz':str += '';
        return str;
    }

    /*z方法二
    if(p.toString().indexOf('3') != -1){
        return 'Fizz';
    }else if(p%(a*b*c) === 0){
        return 'FizzBuzzWhizz';
    }else if(p%(a*b) === 0){
        return 'FizzBuzz';
    }else if(p%(b*c) === 0){
        return 'BuzzWhizz';
    }else if(p%(a*c) === 0){
        return 'FizzWhizz';
    }else if(p%a === 0){
        return 'Fizz';
    }else if(p%b === 0){
      return 'Buzz';
    }else if(p%c === 0){
      return 'Whizz';
    }else{
      return p;
    }
    */
}