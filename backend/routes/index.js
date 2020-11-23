var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
const express = require('express');
const router = express.Router();
const apiRouter = require('./api')

router.use('/api', apiRouter);

// router.get('/hello/world', csrfProtection, function (req, res) {
//     res.cookie('token', req.csrfToken);
//     res.send('Hello World!');
// });

module.exports = router;
