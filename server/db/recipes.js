var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Defines structure of documents
const recipeSchema = new Schema({
    name: String,
    ingredients: Object
});

const Recipes = mongoose.model('Recipes', recipeSchema);
module.exports = Recipes;