// n个台阶, 每次你可以跨1个台阶或2个台阶, 请问有多少种走法   n= 7   值为多少

const w = new Map() //数据结构 Hash表
function f(n){
    // 归 退出条件
    if(n==1) return 1;
    if(n==2) return 2;
    if(w.has(n)){
        return w.get(n);
    }
        var ret = f(n-1)+f(n-2)
        w.set(n,ret);
        return ret
    // return f(n-1)+f(n-2); //递
}
// 内存溢出
// - 重复计算 7 6+5  6 5+4
// 计算过的缓存一下{key:val} Map() get set    HashMap
console.log(f(99))