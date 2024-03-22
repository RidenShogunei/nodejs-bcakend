// 导入 express 模块
const express = require('express');
const login = require('../nodejs-bcakend/modle/login')
// 创建 express 应用
const app = express();

// 定义一个简单的 GET 路由路径
app.get('/', (req, res) => {
  console.log("receive message")
  res.send('Hello World!');
});

// 监听 3000 端口
const port = 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});