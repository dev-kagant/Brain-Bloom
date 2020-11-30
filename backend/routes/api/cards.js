const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator')
const { Course, Deck, Card, CourseList } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')

const router = express.Router();


router.post(
    "deck/:id(\\d+)/create",
    asyncHandler(async (req, res) => {
        const { cardFront, cardBack } = req.body;
        const userId = req.locals.user.id;
        const deckId = req.params.id
        const courseId = deckId.courseId;
        await Deck.create({
            userId,
            courseId,
            deckId,
            cardFront,
            cardBack
        });
        res.redirect(`/courses/${course.id}`);
    })
);

router.get(
    '/delete/card/:id(\\d+)',
    requireAuth,
    asyncHandler(
        async (req, res) => {
            const { id } = req.params.id;
            const card = await Card.findByPk(id);

            if (res.locals.user.id !== card.userId) {
                return res.render('/', { errors: ["Not authorize to delete this card"] })
            }
            await card.destroy();
            res.redirect('/')
        }
    )
)


module.exports = router;
