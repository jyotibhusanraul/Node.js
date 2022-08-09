const connection = require('./config');
const express = require('express');
const app = express();

app.use(express.json())
app.get('', (req, resp) => {
    connection.query("select * from anil", (err, result) => {
        if (err) {
            resp.send(err);
        } else {
            resp.send(result);
        }
    });
});

app.post('', (req, resp) => {
    let data = req.body;
    connection.query("insert into anil set ?", data, (err, result) => {
        if (err) {
            resp.send(err);
        } else {
            resp.send(result);
        }
    });

});

app.put('', (req, resp) => {
    let data = ["name", "password"];
    connection.query("update anil set name=?, password=? where id = 5", data, (err, result) => {
        if (err) {
            resp.send(err);
        } else {
            resp.send(result);
        }
    });

});
app.listen(5000);