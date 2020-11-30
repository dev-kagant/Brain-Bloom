'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseList = sequelize.define('CourseList', {
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'Classes',
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      }
    }
  }, {});
  CourseList.associate = function (models) {
    // associations can be defined here
  };
  return CourseList;
};
