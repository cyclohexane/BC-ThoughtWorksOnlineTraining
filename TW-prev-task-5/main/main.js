module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.nmb()}
o) 平均值 = ${sequence.avg()}`)
};

class Sequence {
  constructor(input) {
    this.array = input;
  }

  minimum() {
      return Math.min.apply(Math,this.array);
  }
  
  maximum() {
      return Math.max.apply(Math,this.array);
  }
  
  nmb(){
      return this.array.length;
  }
  
  avg(){
      let sum = 0;
      let i = 0;
      for(i;i<this.array.length;i++){
          sum+=this.array[i];
      }
      return (sum/(this.array.length)).toFixed(2);
  }
}
