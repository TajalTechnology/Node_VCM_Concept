const express = require('express') //import express
const router = express.Router()

const authController = require('../controllers/authController')

// router.get('/', (req, res, next) =>{
//     res.send('Hello')
// })

router.get('/', authController.register)

module.exports =router