const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const diaryRouter = require('./modle/diary'); 
const app = express();

// 使用cors 和 bodyParser中间件
app.use(cors());
app.use(bodyParser.json());

app.use('/diary', diaryRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});