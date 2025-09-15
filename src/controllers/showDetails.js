function showDetails(req, res, next) {
    console.log(req.body.text)
    const message = {
        text: req.body.text,
        user: req.body.user,
        added: req.body.added
    }
    res.render('message', {message: message})
}

module.exports = showDetails