const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator')
const { Course, Deck, Card, CourseList } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth')

const router = express.Router();

const validateCourse = [
    check('courseName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your course.'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a short decription of your course'),
    handleValidationErrors,
];

router.get(
    '/',
    asyncHandler(
        async (req, res) => {
            const id = res.locals.user.id;
            let myCourses = await CourseList.findAll({
                where: {
                    userId: id
                },
                include: [Course],
                order: ["updatedAt"],
            });
            console.log(myCourses);
            myCourses = myCourses.map(course => course.toJSON());

            res.render("courses", {
                myCourses,
                logedIn: req.userLogedIn
            })
        })
)

router.post(
    "/",
    validateCourse,
    asyncHandler(async (req, res) => {
        debugger
        const { userId, courseName, description } = req.body;
        const course = await Course.create({
            userId,
            courseName,
            description,
        });
        res.redirect('/');
    })
);


router.delete(
    '/delete/:id(\\d+)',
    requireAuth,
    asyncHandler(
        async (req, res) => {
            const { id } = req.params;
            const course = await Course.findByPk(id);

            if (res.locals.user.id !== course.userId) {
                return res.render(`/courses/${course.id}`, { errors: ["Not authorize to delete this course"] })
            }
            await course.destroy();
            res.redirect('/')
        }
    )
)




module.exports = router;
