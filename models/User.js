const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create user model
class User extends Model {}

//define table columns and configuration
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.String,
      allowNull: false,
    },
    email: {
      type: DataTypes.String,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.String,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
