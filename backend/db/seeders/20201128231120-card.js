'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', [
      {
        cardFront: 'Hallo',
        cardBack: 'Hello',
        deckId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'das Feuer',
        cardBack: 'the fire',
        deckId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'das Wasser',
        cardBack: 'Water',
        deckId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'der Klang',
        cardBack: 'the sound',
        deckId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'December',
        cardBack: 'Dezember',
        deckId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'der Wein',
        cardBack: 'the wine',
        deckId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'das Kleid',
        cardBack: 'the dress',
        deckId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'der Suden',
        cardBack: 'the south',
        deckId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'die Hand',
        cardBack: 'the hand',
        deckId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'die Wolle',
        cardBack: 'the wool',
        deckId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cardFront: 'die Liebe',
        cardBack: 'the love',
        deckId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Cards', null, {});

  }
};
