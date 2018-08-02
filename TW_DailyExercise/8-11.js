/*题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。*/

module.exports = function main(str,val){
    str = str.split('->');
    let result = []
    str.forEach(i =>{
        if(i !== val.toString()){
            result.push(i);
        }
    })
    return result.join('->');
}