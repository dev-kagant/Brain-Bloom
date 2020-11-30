'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Courses', [
      {
        courseName: "Chemistry",
        description: "Something to describe for the course",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "Geometry",
        description: "Something to describe for the course",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "Art History",
        description: "Something to describe for the course",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "Mode",
        description: "Something to describe for the course",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "Fashion thru History",
        description: "Something to describe for the course",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "German",
        description: "Something to describe for the course",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "Italian",
        description: "Something to describe for the course",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        courseName: "Korean",
        description: "Something to describe for the course",
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
