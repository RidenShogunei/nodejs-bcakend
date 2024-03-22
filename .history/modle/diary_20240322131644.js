const express = require('express');
const router = express.Router();

router.post('/submit', (req, res) => {  
  console.log(req.body); //这里会打印你发送的数据
  res.send('Data received!');
});

router.post('/search', (req, res) => {  
  console.log(req.body); //这里会打印你发送的数据
  res.send('search received!');
});

module.exports = router;