export function getRecipeUstensils(recipe){
    let ustensils = []
    for(let i = 0; i < recipe.ustensils.length; i++){
        ustensils.push(recipe.ustensils[i])
    }
    return ustensils
}