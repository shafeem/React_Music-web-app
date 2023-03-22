const express =require('express')
const cors = require('cors')

const userrouter = require('./routes/userrouter');
const adminrouter = require('./routes/adminrouter');

const app = express()

app.use(cors({
    origin:['http://localhost:5173'],
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));





app.use('/',userrouter)
// app.use('/admin',adminrouter)


module.exports = app