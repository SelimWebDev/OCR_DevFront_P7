import { filteredInputRecipes, initRecipes } from "../../state/state.js";
import { isIncluded } from "./isIncluded.js";

export function searchByInput(input){
    filteredInputRecipes.length = 0

    initRecipes.forEach(recipe => {

        const recipeName = recipe.name.toLowerCase()

        let recipeIngredient = []
        for(let i = 0; i < recipe.ingredients.length; i++){
            if(recipe.ingredients[i].ingredient.toLowerCase().includes(input)){
                match = true
            } 
        }
        // for(let i = 0; i < recipe.ustensils.length; i++){
        //     if(recipe.ustensils[i].toLowerCase().includes(input)){
        //         match = true
        //     }
        // }
        // if(recipe.appliance.toLowerCase().includes(input)){
        //     match = true
        // }

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