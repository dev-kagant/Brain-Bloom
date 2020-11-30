const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator')
const { Course, Deck, Card, CourseList } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')

const router = express.Router();

const validateDeck = [
    check('deckName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your new deck.'),
    check('deckDescription')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a short decription of your deck'),
    handleValidationErrors,
];


router.get(
    '/:id(\\d+)/decks',
    asyncHandler(
        async (req, res) => {
            const id = req.params.id
            let decks = await Deck.findAll({
                where: {
                    courseId: id
                },
                include: [Card],
                order: ["createdAt"],
            });
            decks = decks.map(deck => deck.toJSON());

            res.render("decks", {
                decks,
                logedIn: req.userLogedIn
            })
        })
)

router.post(
    "/:id(\\d+)/create",
    validateDeck,
    asyncHandler(async (req, res) => {
        const { deckName, deckDescription } = req.body;
        const userId = req.locals.user.id;
        const courseId = req.params.id;
        await Deck.create({
            userId,
            courseId,
            deckName,
            deckDescription,
        });
        res.redirect(`/courses/${course.id}`);
    })
);



router.get(
    '/delete/deck/:id(\\d+)',
    requireAuth,
    asyncHandler(
        async (req, res) => {
            const { id } = req.params.id;
            const deck = await Deck.findByPk(id);

            if (res.locals.user.id !== deck.userId) {
                return res.render('/', { errors: ["Not authorize to delete this deck"] })
            }
            await deck.destroy();
            res.redirect('/')
        }
    )
)

module.exports = router;
