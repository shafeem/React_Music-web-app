const mongoose = require('mongoose');
const dotenv = require('dotenv')

mongoose.set("strictQuery",false)

dotenv.config({path:'./.env'});
const DB= process.env.DATABASE_URL
console.log('db started');



const DBconnect = mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('strictQuery',false)

module.exports = DBconnect;