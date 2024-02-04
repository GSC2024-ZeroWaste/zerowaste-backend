'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post);
      User.belongsToMany(models.Project, {
        through: models.UserBookmarkedProject,
      });
    }
  }
  User.init(
    {
      uid: DataTypes.STRING,
      email: DataTypes.STRING,
      displayName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
