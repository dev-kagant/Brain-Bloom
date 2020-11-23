'use strict';

const { ValidatorsImpl } = require("express-validator/src/chain");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (ValidatorsImpl.isEmail(value)) {
            throw new Error('Cannot be an email');
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  }, {});

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
