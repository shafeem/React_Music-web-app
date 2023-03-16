const express = require('express')
const verifyUser = require('../jwt/auth')

const {
        userlogin
    } = require('../controller/usercontroller')

const router = express.Router()



router.post("/googleAuth",userlogin)

module.exports = router