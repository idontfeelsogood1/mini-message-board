const messages = require('../models/messages')

function addNewMessage(req, res, next) {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    })
    res.redirect('/')
}

module.exports = addNewMessage