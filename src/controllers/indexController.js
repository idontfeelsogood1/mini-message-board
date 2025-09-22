const messages = require('../models/messages')

async function indexController(req, res, next) {
    const arr = await messages.getAllMessages()
    res.render('messages', {messages: arr})
}

module.exports = indexController