// 立即执行函数
Singleton = (function(){
    //闭包 closure
    let instance = null; //闭包区域
    console.log('-------');
    return function(){
        // constructor
        if(instance){
            return instance;
        }
        return instance = this;
    }
})();
console.log(Singleton,typeof Singleton)
//实例 return 单例模式
console.log(Singleton);
const a = new Singleton();
const b = new Singleton();
console.log(a==b);