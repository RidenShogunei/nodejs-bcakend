const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {  
  console.log(req.body); //这里会打印你发送的数据
  res.send('Data received!');
});

module.exports = router;