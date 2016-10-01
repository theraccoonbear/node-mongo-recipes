var express = require('express');
var app = express();
var mongoose = require('mongoose');
//DB setup
mongoose.connect("mongodb://mongo:27017");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're connected to Mongo");
});


var recipeSchema = mongoose.Schema({
    name: String,
    serves: Number,
    author: String,
    ingredients: [{ name: String, unit: String, quantity: Number }],
    directions: []
});

var Recipe = mongoose.model('Recipe', recipeSchema);

function addRecipes() {
  console.log('Removed all recipes');
  Recipe.remove({}, function(err) {
    if (err) {
			console.log(err);
		}
  });
  console.log('Adding Split Pea Soup with Ham');
	var recipe = new Recipe({
    name: 'Split Pea Soup with Ham',
    serves: 1,
    author: 'co-op',
    ingredients: [
      { name: 'split-pea-soup', unit: 'c', quantity: 1 },
      { name: 'ham', unit: 'c', quantity: .3 },
      { name: 'water', unit: 'c', quantity: 1.3 },
    ],
    directions: [
      'Steep in hot water 10 minutes',
      'Bring to a boil for 2 minutes',
      'Steep an additional 10 minutes',
      'Stir and eat'
    ]
  }).save();
  
  var recipe = new Recipe({
    name: 'Southwestern Style Beefy Beans and Rice',
    serves: 1,
    author: 'don',
    ingredients: [
      { name: 'onion', unit: 'c', quantity: 0.2},
      { name: 'peppers', unit: 'c', quantity: 0.2},
      { name: 'black-beans', unit: 'c', quantity: 0.1},
      { name: 'pinto-beans', unit: 'c', quantity: 0.1},
      { name: 'garbanzo-beans', unit: 'c', quantity: 0.1},
      { name: 'salsa-leather', unit: 'c', quantity: 0.3},
      { name: 'rice', unit: 'c', quantity: 0.3},
      { name: 'ground-beef', unit: 'c', quantity: 0.3},
      { name: 'water', unit: 'c', quantity: 1.5},
    ],
    directions: [
      'Steep in hot water 10 minutes',
      'Bring to a boil for 2 minutes',
      'Steep an additional 10 minutes',
      'Stir and eat'
    ]
  }).save();
}

addRecipes();

app.get('/', function(req, res){
  var resp = [];
  resp.push("Hello World-changed-2");
  resp.push('<pre>');
  Recipe.find({}).exec(function(err, r) {
    resp.push(JSON.stringify(r, null, 2));
    resp.push('</pre>');
    res.send(resp.join(''));
  });
  
  //res.send(resp.join(''));
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});


