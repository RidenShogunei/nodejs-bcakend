module.exports = function (conn) {
  const express = require('express');
  const router = express.Router();

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
    let data = req.body.detile;
    let time = req.body.time;
    if (data === "" && time === "") {
      let sqlStr = `SELECT * FROM diary`;
    }
    else {
      let sqlStr = `SELECT * FROM diary where data=='${data}' and time == '${time}'`;
    }
    conn.query(sqlStr, (err, results) => {
      if (err) {
        console.error("查询失败：", err);
        res.send("查询失败");
      } else {
        console.log("查询成功");
        res.send(results);
      }
    });
  });
  return router;
}

