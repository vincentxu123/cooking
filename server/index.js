
require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.static("public"));
app.use(bodyParser.json());

var Groceries = require('./db/grocercies.js');
var Recipes = require('./db/recipes.js');
var mongoose = require('mongoose');

// connect to mongodb
const dbURI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qabbt.mongodb.net/Food?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {console.log('connected to db')})
    .catch((err) => console.log(err));



app.get("/groceries", (req, res) => {
    Groceries.find().then((result) => {
      res.json(result);
    })
})

app.get("/recipes", (req, res) => {
  Recipes.find().then((result) => {
    res.json(result);
  })
})

app.post("/newgroceries", (req, res) => {
  const item = req.body;
  const groceries = new Groceries(item);
  groceries.save();
  res.json({message: "Success"});
})

app.post("/deletegrocery", (req, res) => {
  Groceries.findByIdAndDelete(req.body._id, (err, data) => {
    if (!err) {
      console.log("Deleted " + req.body.name + " from list");
    }
  });
  
  res.json({message: "Success"});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});