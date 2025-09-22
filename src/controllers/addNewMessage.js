const messages = require('../models/messages')
const { body, validationResult } = require('express-validator')

const validators = [
body('name').trim()
.isLength({ min: 4, max: 10 }).withMessage('Username must be between 4 - 10 characters.'),
body('message').trim()
.isLength({ min: 1, max: 100 }).withMessage('Message must be between 1 - 100 characters.'),
]

async function addNewMessage(req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors)
        res.render('form', { error: errors.array() || false })
        return
    }
    await messages.addNewMessage(req.body.name, req.body.message)
    res.redirect('/')
}

module.exports = {
    validators,
    addNewMessage
}