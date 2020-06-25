'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.TEXT,
    content: DataTypes.TEXT,
    articleId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.comment.belongsTo(models.article)
  };
  return comment;
};