const express = require('express')
const detailsRouter = express.Router()
const showDetails = require('../controllers/showDetails')

detailsRouter.post('/', showDetails)

module.exports = detailsRouter