var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Defines structure of documents
const grocerySchema = new Schema({
    name: String,
    quantity: Number,
    measurement: String
});

const Groceries = mongoose.model('Groceries', grocerySchema);
module.exports = Groceries;