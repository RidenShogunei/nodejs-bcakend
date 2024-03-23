module.exports = function (conn) {
  const express = require('express');
  const router = express.Router();

  router.post('/submit', (req, res) => {
    console.log("Data received!");
    console.log(req.body);
    let data = req.body.data;
    let time = req.body.time;
    let sqlStr = `INSERT INTO diary (data, time) VALUES(${data}, ${time})`;

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

    //这是你的模拟结果，请根据实际逻辑替换
    const searchResults = [
      { date: '2024-03-22', detile: '今天的早晨，我早早起床，决定去厨房烹饪一顿丰盛的早餐，顺便尝试新买的煎锅。锅太好用了，早餐做的非常美味，我感觉这是我近段时间做的最好的一顿饭。' },
      { date: '2024-03-23', detile: '一直以来，我都是一个热衷于音乐的人。我爱上音乐的静谧和深沉，它像是美妙的旋律，回荡在我的心底。最近，我发现一首叫做《月光》的歌曲，它的旋律让我如痴如醉。那天晚上，我一边看着窗外的月光，一边聆听着《月光》，不禁感叹音乐的魅力。' },
    ];

    res.send(searchResults); //发送搜索结果
  });
  return router;
}

