import { filteredInputRecipes, filteredTagRecipes } from "../state/state.js";

export function setFinalRecipes(){
    var finalFilteredRecipes = []
    const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));

    if(filteredInputRecipes.length == 0){
        finalFilteredRecipes = filteredTagRecipes
    } else if(filteredTagRecipes.length == 0){
        finalFilteredRecipes = filteredInputRecipes
    } else {
        if(filteredInputRecipes.length > filteredTagRecipes.length){
            console.log("compare the 2 array recipes")
            for(let i = 0; i < filteredInputRecipes.length; i++){
                for(let j = 0; j < filteredTagRecipes.length; j++){
                    if(Object.is(filteredInputRecipes[i], filteredTagRecipes[i])){
                        finalFilteredRecipes.push(filteredInputRecipes[i])
                    }
                }
            }
        } else {
            console.log("compare the 2 array recipes")
            for(let i = 0; i < filteredTagRecipes.length; i++){
                for(let j = 0; j < filteredInputRecipes.length; j++){
                    if(Object.is(filteredInputRecipes[i], filteredTagRecipes[i])){
                        finalFilteredRecipes.push(filteredTagRecipes[i])
                    }
                }
            }
        }
    }

    finalFilteredRecipes = uniqueArray(finalFilteredRecipes)

    return finalFilteredRecipes
}