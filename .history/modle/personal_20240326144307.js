module.exports = function (conn) {
    const express = require('express');
    const router = express.Router();
    const moment = require('moment-timezone');

    router.post('/submit', (req, res) => {
        console.log("Data received!");
        console.log(req.body);
        let title = req.body.mytitle; // 新增
        let content = req.body.data;
        let time = req.body.time;
        let show = req.body.showornot;
        let sqlStr = `INSERT INTO personal (title, content, time,showornot) VALUES('${title}', '${content}', '${time}',${show})`; // 修改表名和字段名
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

    router.post('/get', (req, res) => {
        console.log("get received!");
        console.log(req.body);
        let title = req.body.title; // 新增
        let content = req.body.content;
        let time = req.body.time;
        let show=req.body.showornot;
        let sqlStr; // 在这里定义sqlStr
        if(showornot===""){
        sqlStr = `SELECT * FROM personal`;}
    else{
        sqlStr = `SELECT * FROM personal where showornot="1"`;}
        /*if (title === "" && content === "" && time === "") { // 新增title的判断
            sqlStr = `SELECT * FROM personal`;
        } else if (content === "" && time === "") {
            sqlStr = `SELECT * FROM personal where title LIKE '%${title}%'`;
        } else if (title === "" && time === "") {
            sqlStr = `SELECT * FROM personal where content LIKE '%${content}%'`;
        } else if (title === "" && content === "") {
            time = moment(time).tz('Asia/Shanghai').format();
            time = time.substring(0, 10); // "2024-03-11"
            sqlStr = `SELECT * FROM personal where time = '${time}'`;
        } else if (time === "") {
            sqlStr = `SELECT * FROM personal WHERE title LIKE '%${title}%' AND content LIKE '%${content}%'`;
        } else if (content === "") {
            time = moment(time).tz('Asia/Shanghai').format();
            time = time.substring(0, 10); // "2024-03-11"
            sqlStr = `SELECT * FROM personal WHERE time = '${time}' AND title LIKE '%${title}%'`;
        } else if (title === "") {
            time = moment(time).tz('Asia/Shanghai').format();
            time = time.substring(0, 10); // "2024-03-11"
            sqlStr = `SELECT * FROM personal WHERE time = '${time}' AND content LIKE '%${content}%'`;
        } else {
            time = moment(time).tz('Asia/Shanghai').format();
            time = time.substring(0, 10); // "2024-03-11"
            sqlStr = `SELECT * FROM personal WHERE time = '${time}' AND title LIKE '%${title}%' AND content LIKE '%${content}%'`;
        }*/

        conn.query(sqlStr, (err, results) => {
            if (err) {
                console.error("查询失败：", err);
                res.send("查询失败");
            } else {
                console.log("查询成功");
                let detail = results.map(row => {
                    return {
                        title: row.title, // 新增
                        content: row.content,
                        time: row.time
                    }
                });
                console.log(detail);
                res.send(detail);
            }
        });
    });
    return router;
}