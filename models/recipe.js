'use strict';

module.exports = function(mongoose) {

    var recipeSchema = mongoose.Schema({
        name: String,
        serves: Number,
        author: String,
        ingredients: [{ name: String, unit: String, quantity: Number }],
        directions: []
    });
    
    var Recipe = mongoose.model('Recipe', recipeSchema);

    return Recipe;
}