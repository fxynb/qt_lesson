//Math.max()
const IMath = {} //namespace
/** 
 * @param:number NaN    Not a Number
 * @return:number   返回最大值
 * 
 */
IMax.max = function(...args){
    console.log(arguments,arguments.length);
}
IMax.max(2,4,3,9);
IMath.max = function(){
    for(var i = 0;i<args.length;i++){
        //console.log(typeof )
        if(typeof args[i] !== 'number'){
            return NaN;
        }
    }

}
console.log(IMah.max(...[2,4,3,9]));
