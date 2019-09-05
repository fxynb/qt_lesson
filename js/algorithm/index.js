//发红包问题


// total/num*2 抢的公平
function hongbao(total,num){
    const arr = [];
    let restAmount = total;//余下的钱
    let restNum = num;  //余下没领钱的人数
    for(let i = 0;i<num-1;i++){
        let amount = parseFloat(Math.random() * (restAmount/restNum)*2).toFixed(2);//toFixed(unm)取小数前num位
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(100,10));
