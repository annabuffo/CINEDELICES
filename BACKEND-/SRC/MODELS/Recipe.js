const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Recipe = sequelize.define('Recipe', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ingredients: DataTypes.TEXT,
  instructions: DataTypes.TEXT
});

module.exports = Recipe;