- js是一门单线程语言,
  中台 让大型公司更好的复用开发能力/资源
  node 的性能就有了要求，可以像java一样多线程？
  node app.js 1234 端口给了你
  前端 mount #app CPU
  进程 process  操作系统挂载运行程序的单元
  拥有独立的资源
  工作交给子进程，一个人做事
  招人， 企业  
  req => 请求？{n} 天生是多线程的
  分配资源给他 完成这次请求 + 响应 
  线程是运算调度的单元，进程计算都在一个线程上跑
  内存， 计算机资源 用户的并发 电脑可以运行正常
  ？？ ab test 
  1. 一个进程， 1234 使用资源（内存 + 读写I/O）,CPU进程，线程{n}，物理上限
  2. node cluster
    2/4/8个cpu
    一个在跑 能不能把另一个n-1个也用起来


创业，CPU跑起来 ，跑多核，尽可能多的用户服务，cluster 
横向扩容 请求分配给这些机器
负载均衡 ngnix  apache  tomcat 
www.taobao.com/search?a=1(浏览器proxy,手机，小程序 app) 中央服务器发出请求 -> ngnix -> 选中一台当前还有运算能力的服务器 ip -> 用户返回 (TCP/IP三次握手)
分布式， 每个CPU都会跑同样的程序
ip 响应服务
每台机器上都要去部署同样的代码，同样的运行环境(docker)，

证据 性能 ? docker + ab test + node cluster + nginx 压力测试

代码好? 证明?  测试驱动开发 mocha

- docker 
  集装箱 50台机器 百万并发 开发环境镜像
  统一所有机器的开发环境 centos 7 取代了虚拟机， 不用提前超大硬盘以及内存，操作特别快，全命令行化

- docker 镜像文件 docker images
  docker run -p 1234:1234 -it (docker 的 image id) /bi/bash
  