const userSchema = require('../model/user');
const jwt = require('jsonwebtoken')

require('dotenv').config();

const userlogin =async (req,res)=>{
    try {
        console.log(req.body.datas.data.email,'this is the main data shafeem shan');
    const {name,email} = req.body.datas.data;

    const user =await userSchema.findOne({email:email})

    if(user !==null ){
        console.log('user already exist');
        console.log(user);
        const userId = user._id;

        const token = jwt.sign({userId},process.env.JWT_SECREAT_KEY,{expiresIn:"1hr"})

        res.json({ "auth" : true, "token" : token , "status" : "success" , "message" : "existing user"})
    }else{
        console.log('user not exist ')
        const newUser = new userSchema({
            name:name,
            email:email,
        })
        await newUser.save()

        const user= await userSchema.findOne({email:email})
        const userId = user._id;

        const token = jwt.sign({userId},process.env.JWT_SECREAT_KEY,{expiresIn:"1hr"})

        res.json({ "auth" : true ,"token" : token , "status" : "success" , "message" : "new user"})
    }
    } catch (error) {
        console.log(error.message);
    }
}

const verifyNumber = async (req,res) =>{
    console.log(req.body,'this is the body of verify number');
}

module.exports = {
    userlogin,
    verifyNumber
};