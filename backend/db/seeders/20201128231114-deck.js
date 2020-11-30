'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Decks', [
      {
        deckName: 'Periodic Table',
        deckDescription: 'All of the element currently found within the period table',
        courseId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        deckName: 'Shapes',
        deckDescription: 'Naming all the types of shapes',
        courseId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        deckName: 'Moda: Fashion Houses in Italy',
        deckDescription: 'Learn all of the popular fashion houses within the country of Italy',
        courseId: 4,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        deckName: '1950s',
        deckDescription: " Clothing styles of the 1950's",
        courseId: 5,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        deckName: 'German Vocab 1',
        deckDescription: '200 vocabulary words to get you started learning German words',
        courseId: 6,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        deckName: 'German Vocab 2',
        deckDescription: '200 vocabulary words to get you started learning German words',
        courseId: 6,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Decks', null, {});

  }
};
