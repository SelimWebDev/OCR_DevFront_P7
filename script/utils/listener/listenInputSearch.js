import { initRecipes } from "../../state/state.js"
import { displayRecipes } from "../display/displayRecipes.js"
import { searchByInput } from "../search/searchByInput.js"
import { setFinalRecipes } from "../setFinalRecipes.js"


export function listenInputSearch(){
    const searchBtn = document.getElementById("search-icn")

    searchBtn.addEventListener('click', () => {
        const input = document.getElementById("search-input")
        const inputValue = input.value
        if(inputValue.length >= 3){ // si + 3 lettre affiche resultat
            searchByInput(inputValue)
            
            displayRecipes(setFinalRecipes())
        } else {             //sinon affiche initial
            displayRecipes(initRecipes)
        }
    })
}