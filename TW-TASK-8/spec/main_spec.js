"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");

describe("将数字邮编和条码邮编相互转换", function(){
    sinon.spy(console, 'log');

    it("输入5位数字邮编", function(){

        var result = main('35416');
        var expect_string = '|::||::|:|::|::|:::||:||:::::|||';
        
        expect(expect_string).to.equal(result);
    });

    it("输入9位数字邮编", function(){

        var result = main('354166527');
        var expect_string = '|::||::|:|::|::|:::||:||:::||:::|:|:::|:||:::|:::|||';
        
        expect(expect_string).to.equal(result);
    });

    it("输入10位数字邮编", function(){

        var result = main('35416-6527');
        var expect_string = '|::||::|:|::|::|:::||:||:::||:::|:|:::|:||:::|:::|||';
        
        expect(expect_string).to.equal(result);
    });

    it("输入5位条码邮编", function(){

        var result = main('|::||::|:|::|::|:::||:||:::::|||');
        var expect_string = '35416';
        
        expect(expect_string).to.equal(result);
    });

    it("输入9位条码邮编", function(){

        var result = main('|::||::|:|::|::|:::||:||:::||:::|:|:::|:||:::|:::|||');
        var expect_string = '35416-6527';
        
        expect(expect_string).to.equal(result);
    });
});