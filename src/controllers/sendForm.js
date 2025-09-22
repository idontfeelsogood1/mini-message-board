function sendForm(req, res, next) {
    res.render('form', { error: false })
}

module.exports = sendForm