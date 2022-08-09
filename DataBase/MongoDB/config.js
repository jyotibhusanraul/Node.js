const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let database = result.db('anil');
    // let collection = database.collection('datas')
    // console.log(await collection.find().toArray());

    // TO ACCESS FROM INDEX.JS PAGE
    return collection = database.collection('datas')
}

module.exports = dbConnect;