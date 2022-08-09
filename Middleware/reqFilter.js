const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    console.log(reqFilter);
    next();

}
app.use(reqFilter);

app.get("", (req, resp) => {

    resp.send("hello");
})

app.listen(5000);