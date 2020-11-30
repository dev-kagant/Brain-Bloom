'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CourseLists', [
      {
        courseId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 4,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 5,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 6,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 7,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 8,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 1,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 2,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 3,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseId: 4,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('CourseList', null, {});

  }
};
