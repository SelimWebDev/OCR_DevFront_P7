import { filteredInputRecipes, initRecipes } from "../../state/state.js";
import { isIncluded } from "./isIncluded.js";

export function searchByInput(input){
    filteredInputRecipes.length = 0
    initRecipes.forEach(recipe => {

        const recipeName = recipe.name.toLowerCase()

        let recipeIngredient = []
        for(let i = 0; i < recipe.ingredients.length; i++){
            recipeIngredient.push(recipe.ingredients[i].ingredient.toLowerCase())
        }

        let recipeUstensils = []
        for(let i = 0; i < recipe.ustensils.length; i++){
            recipeUstensils.push(recipe.ustensils[i].toLowerCase())
        }

        const recipeAppliance = recipe.appliance.toLowerCase()

        
        let match = false
        
        if(isIncluded(input, recipeName)){
            match = true
        } else if (recipeIngredient.forEach(ingredient => isIncluded(input, ingredient))) {
            match = true
        } else if(recipeUstensils.forEach(ustensil => isIncluded(input, ustensil))){
            match = true
        } else if (isIncluded(input, recipeAppliance)){
            match = true
        }

        if(match){
            let alreadyExist = false
            for(let i = 0; i < filteredInputRecipes.length; i++){
                if(Object.is(filteredInputRecipes[i], recipe)){
                    alreadyExist = true
                }
            }
            if(!alreadyExist){
                filteredInputRecipes.push(recipe)
            }
        }
        
    })
}