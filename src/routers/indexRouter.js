const express = require('express')
const indexRouter = express.Router()
const newMessageRouter = require('./newMessageRouter')
const detailsRouter = require('./detailsRouter')
const indexController = require('../controllers/indexController')

indexRouter.get('/', indexController)
indexRouter.use('/details', detailsRouter)
indexRouter.use('/new', newMessageRouter)

module.exports = indexRouter