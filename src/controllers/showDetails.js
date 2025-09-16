function showDetails(req, res, next) {
    const message = {
        text: req.body.text,
        user: req.body.user,
        added: req.body.added
    }
    res.render('message', {message: message})
}

module.exports = showDetails