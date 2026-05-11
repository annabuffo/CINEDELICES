const User = require('./User');
const Film = require('./Film');
const Recipe = require('./Recipe');

// Relations

User.hasMany(Recipe);
Recipe.belongsTo(User);

Film.hasMany(Recipe);
Recipe.belongsTo(Film);

module.exports = { User, Film, Recipe };