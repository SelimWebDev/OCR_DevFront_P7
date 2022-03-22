import { filteredInputRecipes, initRecipes } from "../../state/state.js";

export function searchByInput(input){
    filteredInputRecipes.length = 0

    initRecipes.forEach(recipe => {

        let match = false
        if(recipe.name.toLowerCase().includes(input)){
            match = true
        } 

        for(let i = 0; i < recipe.ingredients.length; i++){
            if(recipe.ingredients[i].ingredient.toLowerCase().includes(input)){
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