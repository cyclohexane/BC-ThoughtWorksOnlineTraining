var info = [];
var total = 0;
var saved = 0;
var promotionSTR = '';

function getFormattedInfo(selectedItems){                                                 //将输入信息处理为对象列表，设置属性
      for(let i of selectedItems){
            let [code,cnt] = i.split(' x ');
            info.push({'id':code,'count':parseInt(cnt)});
      }
      let allItems = loadAllItems();
      for(let i of info){
            i.name = allItems.find(item=>item.id === i.id).name;
            i.price = allItems.find(item=>item.id === i.id).price;
            i.partial = i.count*i.price;
            i.promotionB = false;
      }
}

function getPromotions(){                                                                 //查询食品是否有半价优惠
      let promotions = loadPromotions();
      let list = promotions.find(i=>i.type === '指定菜品半价').items.toString();
      info.forEach(i=>{
            if(list.includes(i.id)){
                  i.promotionB = true;
            }
      });
}

function planA(){                                                                         //计算按第一种方案优惠后的价格
      let totalA = 0;
      for(let i of info){
            totalA += i.partial;
      }
      totalA >= 30 ? totalA -= 6:totalA -= 0;
      return totalA;
}

function planB(){                                                                         //计算按第二种方案优惠后的价格
      let totalB = 0;
      for(let i of info){                 //这里如果用forEach就提示promotionB不存在？
            i.promotionB ? totalB += (i.partial/2):totalB += i.partial;
      };
      return totalB;
}

function getBestCharge(){                                                                  //选择更省钱的方案，生成优惠信息的字符串
      promotionSTR = `\n使用优惠:`;
      for(let i of info){
            total += i.partial;
      }
      let a = planA();
      let b = planB();
      if(a<=b){
            saved = total - a;
            total = a;
            promotionSTR += `\n满30减6元，`;
      }else{
            saved = total - b;
            total = b;
            promotionSTR += `\n指定菜品半价(`;
            let promotionItem = []                                                        //优惠信息中需要写出具体的商品
            info.forEach(i=>{
            if(i.promotionB === true){
                        promotionItem.push(i.name);
                  }
            })
            promotionSTR += promotionItem.join(`，`)+`)，`;
      }
      promotionSTR += `省${saved}元`;
      promotionSTR += `\n-----------------------------------`;
}

function bestCharge(selectedItems) {                                                      //调用各方法，拼合字符串，输出
      info = [];
      total = 0;
      saved = 0;                                //初始化
      getFormattedInfo(selectedItems);
      getPromotions();
      getBestCharge();
      let receipt = `\n============= 订餐明细 =============`;
      for(let i of info){
            receipt += `\n${i.name} x ${i.count} = ${i.partial}元`;
      }
      receipt += `\n-----------------------------------`;
      if(saved != 0) receipt += promotionSTR;
      receipt += `\n总计：${total}元`;
      receipt += `\n===================================`;
      return receipt;
} 