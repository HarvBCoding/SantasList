const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        // using [this] keyword the user's properties (including password) can be accessed
        return bcrypt.compareSync(loginPw, this.password);
    }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      // the beforeCreate() hook is used to execute the bcrypt hash function on the plaintext password
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        // userData object, which contains the plaintext password in the password property is passed to the bcrypt hash function, we also pass a saltRound of 10
        // the resulting hashed password id then passed to the promise object w/ a hashed password property
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
