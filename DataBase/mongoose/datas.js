const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    name: String,
    origin: String
})


// module.exports = dataSchema;
module.exports = mongoose.model('datas', dataSchema);