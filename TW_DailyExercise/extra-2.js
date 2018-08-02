/*题目：将下划线式字符串转为驼峰式*/

module.exports = function main(str){
    str = str.split('_').map(i => i[0].toUpperCase().concat(i.substr(1))).join('');
    return str[0].toLowerCase().concat(str.substr(1));
}