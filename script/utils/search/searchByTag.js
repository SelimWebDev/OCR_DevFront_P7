import { filteredTagRecipes, initRecipes, tagsSelected } from "../../state/state.js";
import { displayRecipes } from "../display/displayRecipes.js";
import { getRecipeIngredient } from "../getRecipeIngredients.js";
import { getRecipeUstensils } from "../getRecipeUstensiles.js";

export function searchByTagsSelected(){
    const ingredientsSelected = tagsSelected.get('ingredients')
    const appliancesSelected = tagsSelected.get('appliances')
    const ustensilsSelected = tagsSelected.get('ustensils')

    const allTagsSelected = [...ingredientsSelected, ...appliancesSelected, ...ustensilsSelected]

    filteredTagRecipes.length = 0

    initRecipes.forEach(recipe => {
        const recipeIngredients = getRecipeIngredient(recipe)
        const recipeAppliance = [recipe.appliance]
        const recipeUstensils = getRecipeUstensils(recipe)

        let arrayToCompare = [...recipeIngredients, ...recipeAppliance, ...recipeUstensils]
        for(let i = 0; i < arrayToCompare.length; i++){
            arrayToCompare[i] = arrayToCompare[i].toLowerCase()
        }
        
        const match = allTagsSelected.length
        let testMatch = 0

        allTagsSelected.forEach(tag => {
            if(arrayToCompare.includes(tag)){
                testMatch += 1
            }
        })

        if(testMatch == match){
            filteredTagRecipes.push(recipe)
        }
    })
    
}