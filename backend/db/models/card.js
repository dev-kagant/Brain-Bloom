'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    deckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'Decks'
      }
    },
    cardFront: {
      type: DataTypes.TEXT
    },
    cardBack: {
      type: DataTypes.TEXT
    }
  }, {});
  Card.associate = function (models) {
    Card.belongsTo(models.Deck, { foreignKey: 'deckId' })
  };
  return Card;
};
