const app = require('./app')
const mongoose = require('./config/dbconnection')


mongoose
        .then(()=>{
            console.log('data base connected ..');
        })
        .catch((err)=>{
            console.log('err in database',err);
        })


const port = process.env.PORT || 3001;

app.listen(port,(error)=>{
    if(error){
        console.log('error occurred',error);
    }
    else{
        console.log(`server is running on port ${port}`);
    }
});