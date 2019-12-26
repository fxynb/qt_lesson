const cluster = require('cluster');//子进程，调用多核能力
const os = require('os');
// console.log(os.cpus().length);
if(cluster.isMaster) { //判断是否是主进程
  for(let i = 0; i < os.cpus.length;i++){
    cluster.fork();//启动一个子进程
  }
}else{
  require('./app');
}

