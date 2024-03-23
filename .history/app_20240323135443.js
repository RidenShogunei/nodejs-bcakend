const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const diaryRouter = require('./modle/diary')(conn); 
const mysql = require('mysql')
const app = express();
const conn = mysql.createConnection({
  user:'root',          //用户名
  password:'Chen2003',	//密码
  host:'localhost',		//主机（默认都是local host）
  database:'mydesk'       //数据库名
})
conn.connect(err=>{
  console.log(err,'如果为null 就是连接成功');
})
// 使用cors 和 bodyParser中间件
app.use(cors());
app.use(bodyParser.json());

app.use('/diary', diaryRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});