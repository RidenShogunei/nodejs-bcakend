const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const conn = mysql.createConnection({
  user:'blog',          //用户名
  password:'chen2003',  //密码
  host:'47.96.160.149',     //主机（默认都是local host）
  database:'mydesk'     //数据库名
});

conn.connect(err => {
  if (err) {
    console.error(err, '如果不为null，则连接失败');
  } else {
    console.log('数据库连接成功');

    // 连接成功后导入 diary 路由
    const diaryRouter = require('./modle/diary')(conn);
    app.use('/diary', diaryRouter);
  }
});

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});