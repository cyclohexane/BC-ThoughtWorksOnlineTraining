module.exports = function main(str) {
  var nmb=str.split("");
  var sum=0;
  for(var i=0,length=nmb.length;i<length;i++){
  sum+=Number(nmb[i]) ;
 }
return sum;
};