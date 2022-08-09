const express = require('express');
const EventEmmiters = require('events');

const app = express();
let count = 0;
const event = new EventEmmiters();

event.on("called", () => {
    count++;
    console.log("API CALLED", count)
})

app.get("/", (req, resp) => {

    resp.send('home');
    event.emit("called")
})

app.get("/about", (req, resp) => {

    resp.send('about');
    event.emit("called")
})

app.get("/contact", (req, resp) => {

    resp.send('contact');

})

app.listen(5000);