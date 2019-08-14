function Person(name){  //女主角 
    //constructor
    //object
    this.name = name;
}
// 男主角
Person.prototype = {
    getName: function(){
        return this.name
    },
    playHpjy:function(){
        console.log('大吉大利，今晚吃鸡')
    }
}
// new + fun() 新的对象
//实例  第三者  
let person = new Person('赵小猛');
console.log(person)