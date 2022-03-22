import { filteredInputRecipes, initRecipes } from "../../state/state.js";
import { isIncluded } from "./isIncluded.js";

export function searchByInput(input){
    filteredInputRecipes.length = 0

    initRecipes.forEach(recipe => {

        let match = false
        if(isIncluded(input, recipe.name)){
            match = true
        } 

        for(let i = 0; i < recipe.ingredients.length; i++){
            if(isIncluded(input, recipe.ingredients[i].ingredient)){
                match = true
            } 
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