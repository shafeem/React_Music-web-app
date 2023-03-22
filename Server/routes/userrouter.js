const express = require('express')
const verifyUser = require('../jwt/auth')

const {
        userlogin,
        verifyNumber,
    } = require('../controller/usercontroller')

const router = express.Router()



router.post("/googleAuth",userlogin)
router.post('/verifyNumber',verifyNumber)

module.exports = router