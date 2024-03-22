// 我们需要引入Express，因为我们要用到其中的Router对象
const express = require('express');
const router = express.Router();

router.post('/submit', (req, res) => {
  console.log(req.body); //这里会打印你发送的数据
  res.send('Data received!');
});

// 导出路由
module.exports = router;