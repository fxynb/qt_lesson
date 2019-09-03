<!-- 柯里化

编写函数 校验电话 号码，邮箱 -->

通用函数有好处    接受n个参数 每次返回一个函数
函数裂变吗？
checkCellPhone = checkByRegExp(/^1[3-9]\d{9}$/);
checkEmail = checkByRegExp()

checkCellPhone('123456456789');
函数式编程

- 返回函数 每次只接受一个参数 
- 返回的函数运行 ，闭包 ， 最初的参数的数量，最后的参数时 运行完成，否则继续返回函数  


- 分函数收集参数的过程
    return function(){}闭包 fn.length fn 闭合
- 收集参数的过程

- require + module.export es5 模块化方案
