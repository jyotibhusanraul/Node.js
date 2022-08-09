const mongoose = require('mongoose');
require('./config')
const dataModel = require('./datas')

// const dataModel = new mongoose.model('datas', dataSchema);
// let data = dataModel.find();
// console.log(data)

main = async() => {
    let data = dataModel;
    let datas = await data.find();
    console.log(datas);
}

main();