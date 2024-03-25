module.exports = function (conn) {
    const express = require('express');
    const router = express.Router();
    const moment = require('moment-timezone');
    router.post('/submit', (req, res) => {
      console.log("Data received!");
      console.log(req.body);
      let data = req.body.data;
      let time = req.body.time;
      let sqlStr = `INSERT INTO diary (data, time) VALUES('${data}', '${time}')`;
  
      conn.query(sqlStr, (err) => {
        if (err) {
          console.error("插入失败：", err);
          res.send("插入失败");
        } else {
          console.log("插入成功");
          res.send('插入成功');
        }
      });
    });
  
    router.post('/search', (req, res) => {
      console.log("search received!");
      console.log(req.body); //这里会打印你发送的数据
      let data = req.body.data;
      let time = req.body.time;
      console.log("收到的数据", data, time);
      let sqlStr; // 在这里定义sqlStr
      if (data === "" && time === "") {
        sqlStr = `SELECT * FROM diary`;
      } else if (data === "") {
        time = moment(time).tz('Asia/Shanghai').format();
        time = time.substring(0, 10); // "2024-03-11"
        console.log("修改的数据", data, time);
        sqlStr = `SELECT * FROM diary where time = '${time}'`; // 使用单个等号进行比较
      } else if (time === "") {
        sqlStr = `SELECT * FROM diary where data LIKE '%${data}%'`; // 使用单个等号进行比较
      } else {
        time = moment(time).tz('Asia/Shanghai').format();
        time = time.substring(0, 10); // "2024-03-11"
        console.log("修改的数据", data, time);
        sqlStr = `SELECT * FROM diary WHERE time = '${time}' AND data LIKE '%${data}%'`;
      }
      conn.query(sqlStr, (err, results) => {
        if (err) {
          console.error("查询失败：", err);
          res.send("查询失败");
        } else {
          console.log("查询成功");
          let detile = results.map(row => {
            return {
              time: row.time,
              data: row.data
            }
          });
          console.log(detile);
          res.send(detile);
        }
      });
    });
    return router;
  }
  
  