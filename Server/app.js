const express =require('express')
const cors = require('cors')
const logger = require('morgan')

const userrouter = require('./routes/userrouter');
const adminrouter = require('./routes/adminrouter');

const app = express()




app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));

app.use('/admin',adminrouter)
app.use('/',userrouter)

app.use(express.json());
app.use(logger("dev"))
app.use(express.urlencoded({extended:true}));


module.exports = app