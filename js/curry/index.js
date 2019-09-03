// 普世
const curry = require('./b.js');
function checkByRegExp(reg,string){
    return  reg.test(string);
}
let checkCellPhone = curry(checkByRegExp)(/^1[3-9]\d{9}$/)
console.log(checkCellPhone('3543212455'))
let checkEmail = curry(checkByRegExp)(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
console.log(checkEmail('124612123@qq.com'))
console.log(checkByRegExp(/^1[3-9]\d{9}$/,'18623452345'));
// .com.cn
console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'124612123@qq.com'
));

checkByRegExp(/^1[3-9]\d{9}$/,'18623452345')
checkByRegExp(/^1[3-9]\d{9}$/,'44352156456')
checkByRegExp(/^1[3-9]\d{9}$/,'18623485155')
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com');
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'test@163.com');