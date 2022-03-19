export function getRecipeIngredient(recipe){
    let ingredients = []
    for(let j=0; j < recipe.ingredients.length; j++){
        ingredients.push(recipe.ingredients[j].ingredient)
    }
    return ingredients
}