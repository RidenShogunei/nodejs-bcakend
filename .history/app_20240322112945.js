const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// body-parser middleware
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  console.log(req.body); // 这里会打印你发送的数据
  res.send('Data received!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});