import { filteredIngTag, filteredAppTag, filteredUstTag, initRecipes } from "../../state/state.js"
import { displayRecipes } from "../display/displayRecipes.js"
import { searchByInput } from "../search/searchByInput.js"
import { setFinalRecipes } from "../setFinalRecipes.js"
import { displayLiTags } from '../display/displayLiTags.js'
import { getTags } from "../getTags.js"


export function listenInputSearch(){
    const searchBtn = document.getElementById("search-icn")

    searchBtn.addEventListener('click', () => {
        const input = document.getElementById("search-input")
        const inputValue = input.value
        if(inputValue.length >= 3){ // si + 3 lettre affiche resultat
            searchByInput(inputValue)
            const recipes = setFinalRecipes()
            displayRecipes(recipes)
            const tags = getTags(recipes)
            filteredIngTag.length = 0

            tags.get('ingredients').forEach(tag => filteredIngTag.push(tag))
            displayLiTags('ingredients')

            tags.get('appliances').forEach(tag => filteredAppTag.push(tag))
            displayLiTags('appliances')

            tags.get('ustensils').forEach(tag => filteredUstTag.push(tag))
            displayLiTags('ustensils')

        } else {             //sinon affiche initial
            displayRecipes(initRecipes)
            
            displayLiTags()
        }
    })
}