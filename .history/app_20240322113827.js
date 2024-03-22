const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const loginRouter = require('./models/detile'); 
// 使用cors 和 bodyParser中间件
app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  console.log(req.body); // 这里会打印你发送的数据
  res.send('Data received!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});