const express = require('express');
const app = express();

// app.use(express.static(__dirname)) //load static webpage
app.set('view engine', 'ejs'); //Templet Engine

app.get('/profile', (req, resp) => {
    const userdata = {
        name: req.query.name,
        skills: ['dance', 'sing']
    }
    resp.render('profile', { userdata }); //Templete Engine
});

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html') //render index.html file to server 
});


app.get('/request', (req, resp) => {
    resp.send(req.query.name); //request from url
});

app.listen(5000);