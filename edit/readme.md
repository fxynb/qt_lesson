- 如果我们由好多信息要从用户收集
  表单不要太长 易用
  移动    分页
  PC 端 ，多个表单 doucument.forms[]
- JS 在面向对象中 
    this 指向谁？
    EditInPlace 类
    let editor = new EditInPlace(); //员工
    this  指向 editor 
    this.staticElement = doucument.createElement('span')
    this.converToText();//既是函数 又是对象的方法 this指向对象
    this.staticElement.addEventListener('click',function(){
        this=>对象
        this=>staticElement 语法定义
        作为事件来执行  内部的this 指向事件发生的元素 


        内部的this是执行时动态决定，执行的方式来决定的
        this.converToText();  //函数是作为对象的方法被调用this指向对象
    })

    - editorInPlace 类 constructor + prototype (原型对象object)
    new editorInPlace() 对象  new发生了什么？
    function EditorInPlace(){}//函数首字母大写 构造器
    editorInPlace.prototype = {
        converToText:function(){}

    }
- 用法
- 代码的组织 attachevents
- 状态的方法
