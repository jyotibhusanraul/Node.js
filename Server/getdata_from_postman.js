const express = require('express');
const app = express();

app.use(express.json())
app.post('', (req, resp) => {
    resp.send(req.body);
    console.log(req.body)
})

app.listen(5000);