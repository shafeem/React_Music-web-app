const express =require('express')
const cors = require('cors')


const app = express()

const userrouter = require('./routes/userrouter');
const adminrouter = require('./routes/adminrouter');

const DATABASE_URL= process.env.DATABASE_URL


app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/admin',adminrouter)
// app.use('/',userrouter)


module.exports = app