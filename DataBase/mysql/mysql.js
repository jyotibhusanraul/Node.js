const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jyoti'
})


app.get('', (req, resp) => {
    let data = connection.query('INSERT INTO anil {}', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            resp.send(result)
        }
    })
});

app.listen(5000)