'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        modeld: 'Courses'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        modeld: 'Users'
      }
    },
    deckName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    deckDescription: {
      type: DataTypes.TEXT
    },
  }, {});
  Deck.associate = function (models) {
    Deck.belongsTo(models.Course, { foreignKey: 'courseId' });
    Deck.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Deck;
};
