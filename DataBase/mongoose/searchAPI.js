const mongoose = require('mongoose');
require('./config');
const dataModel = require('./datas');
const express = require('express');
const app = express();

// const dataModel = new mongoose.model('datas', dataSchema);
// let data = dataModel.find();
// console.log(data)

// main = async() => {
//     let data = dataModel;
//     return datas = await data.find();
// }

app.use(express.json())
app.get("/:name", async(req, resp) => {
    let data = await dataModel.find({
        '$or': [{
                'name': { $regex: req.params.name }
            },
            {
                'origin': { $regex: req.params.name }
            }
        ]
    });
    resp.send(data)
});

app.listen(5000);