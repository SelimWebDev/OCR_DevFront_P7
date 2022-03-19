import { recipeFactory } from '../../factory/recipeFactory.js'

export function displayRecipes(recipes){
    const domContain = document.getElementById('search-result')
    domContain.innerHTML=""
    
    if(typeof recipes == "object"){
        for(let i = 0; i < recipes.length; i++){
            const recipeCard = recipeFactory(recipes[i]).createRecipeCardDOM()
            domContain.appendChild(recipeCard)
        }
    }
}