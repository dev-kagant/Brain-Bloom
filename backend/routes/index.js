const csrf = require('csurf')
const express = require('express');
const apiRouter = require('./api')

const router = express.Router();
const csrfProtection = csrf({ cookie: true })

router.use('/api', apiRouter);


if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    router.get('/', csrfProtection, (req, res) => {
        res.cookie('token', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    router.use(express.static(path.resolve("../frontend/build")));

    router.get('/^(?!\/?api).*/', csrfProtection, (req, res) => {
        res.cookie('token', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', csrfProtection, (req, res) => {
        res.cookie('token', req.csrfToken());
        return res.json({});
    });
}

module.exports = router;
