const messages = require('../models/messages')

function indexController(req, res, next) {
    res.render('messages', {messages: messages})
}

module.exports = indexController