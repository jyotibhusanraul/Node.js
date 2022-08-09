const dbConnect = require('./config')

const data = async() => {
    let data = await dbConnect();
    console.log(await data.find().toArray());
}
data();