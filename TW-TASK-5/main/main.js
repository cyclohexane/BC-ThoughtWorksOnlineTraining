'use strict';

    var info = [];
    var total = 0;
    var total_saved = 0;

function formatTags(input){                     //根据清单整理出商品编号和数量
    let preInfo = [];
    for(let i of input){
        let [code,cnt] = i.split('-');
        preInfo.push({'barcode':code,'count':parseFloat(cnt || 1)});
    }
    for(let i of preInfo){
        let arr = JSON.stringify(info);
        if(arr.indexOf(i.barcode) === -1){
            info.push({'barcode':i.barcode,'count':i.count});
        }else{
            info.find(item=>item.barcode === i.barcode).count += i.count;
        }
    };
    return info;
}

function setProperty(){                         //设置商品的其他属性
    let allItems = loadAllItems();
    for(let i of info){
        i.name = allItems.find(item=>item.barcode === i.barcode).name;
        i.unit = allItems.find(item=>item.barcode === i.barcode).unit;
        i.price = allItems.find(item=>item.barcode === i.barcode).price;
        i.partial = 0;
        i.promotion = false;
    }
}

function getPromotions(){                       //查询商品是否有优惠活动
    let promotions = loadPromotions();
    let promotion1 = promotions.find(item=>item.type === 'BUY_TWO_GET_ONE_FREE').barcodes;
    for(let i of info){
        if(promotion1.includes(i.barcode)){
            i.promotion = true;
        }
    }
}

function calculate(){                           //计算小计、总计、节省
    total = 0;
    total_saved = 0;
    for(let i of info){
        if(i.promotion){
            i.saved = (i.count-i.count%3)/3*i.price;
            i.partial = i.count*i.price - i.saved;
            total += i.partial;
            total_saved += i.saved;
        }else{
            i.partial = i.count*i.price;
            total += i.partial;
        }
    }
}

function printReceipt(input){                   //拼合字符串，输出
    info = [];
    formatTags(input);
    setProperty();
    getPromotions();
    calculate();
    let result = '***<没钱赚商店>收据***';
    for(let i of info){
        result += `\n名称：${i.name}，数量：${i.count}${i.unit}，单价：${i.price.toFixed(2)}(元)，小计：${i.partial.toFixed(2)}(元)`;
    }
    result += '\n----------------------'+'\n总计：'+total.toFixed(2)+'(元)\n节省：'+total_saved.toFixed(2)+'(元)'+'\n**********************';
    console.log(result);
    }
