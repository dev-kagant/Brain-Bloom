'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'Users',
      }
    }
  }, {});

  Course.associate = function (models) {
    Course.hasMany(models.Deck, { foreignKey: 'courseId' });
    Course.belongsToMany(models.User, {
      through: 'CourseList',
      as: 'users',
      foreignKey: 'courseId'
    })
  };
  return Course;
};
