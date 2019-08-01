// live-server
// index.html  http 访问的支持 web server
const http = require('http');
const fs = require('fs');
const index =
  fs.createReadStream('./index.html');
// web server 一直伺服的 3000
// 向request 返回response资源 
const server = http.createServer((req, 
  res) => {
  // res.end('hello world');
  // index.html 显示出来   /
  // req 浏览器 访问网站的代理
  if (req.url == '/') {
    index.pipe(res);
    // res.end('index page');
  } else if(req.url =='/userinfo'){
      const info = {
        "name":"徐影佳",
        "desc":"身骑白马"
      }
    //   res.end(JSON.stringify(info));
      res.writeHead(200,{
          'Content-Type': 'text/plain;charst=utf-8'
      })
  }
  else {
    res.end('hello world');
  }
})

server.listen(1314);