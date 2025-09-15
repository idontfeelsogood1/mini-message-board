const express = require('express')
const newMessageRouter = express.Router()
const sendForm = require('../controllers/sendForm')
const addNewMessage = require('../controllers/addNewMessage')

newMessageRouter.get('/', sendForm)
newMessageRouter.post('/', addNewMessage)

module.exports = newMessageRouter