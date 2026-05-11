const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Film = sequelize.define('Film', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: DataTypes.TEXT,
  year: DataTypes.INTEGER
});

module.exports = Film;