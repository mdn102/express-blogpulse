'use strict';
module.exports = (sequelize, DataTypes) => {
  const articlesTags = sequelize.define('articlesTags', {
    articleID: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  articlesTags.associate = function(models) {
    // associations can be defined here
  };
  return articlesTags;
};