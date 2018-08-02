/*计算两个数组的交数组
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].*/

module.exports = function main(nums1,nums2){
    let position = -1;
    let result = [];
    nums1.forEach( i =>{
        if(nums2.indexOf(i, position+1) !== -1){
            result.push(i);
            position = nums2.indexOf(i, position+1);
        }
    })
    return result;
}