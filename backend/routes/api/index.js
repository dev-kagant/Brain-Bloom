const express = require('express');
const router = express.Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const courseRouter = require('./courses.js');
const deckRouter = require('./decks.js');
const cardRouter = require('./cards.js');


// router.post("/test", function (req, res) {
//     res.json({ requestBody: req.body });
// });

// router.use((req, res, next) => {
//     req.userLogedIn = res.locals.authenticated ? true : false;
//     next();
// });


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/courses', courseRouter);

router.use('/decks', deckRouter);

router.use('/cards', cardRouter)



module.exports = router;
