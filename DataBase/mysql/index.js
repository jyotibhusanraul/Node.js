const conn = require('./config');
const express = require('express');
const app = express();

// conn.connect((err) => {
//     if (err) {
//         console.log('error')
//     } else {
//         console.log('Connected');
//     }
// });

conn.query("select * from anil", (err, result) => {

    console.log("result", result)
});

app.get("", (req, resp) => {

    conn.query("select * from anil", (err, result) => {

        if (err) {
            resp.send('error')
        } else {
            resp.send(result);
        }
    });
})

app.listen(5000);