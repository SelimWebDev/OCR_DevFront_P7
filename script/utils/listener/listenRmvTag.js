import { tagFactory } from "../../factory/tagFactory.js"
import { initRecipes, tagsSelected } from "../../state/state.js"
import { displayRecipes } from "../display/displayRecipes.js"
import { displayTagsSelected } from "../display/displayTagsSelected.js"
import { searchByTagsSelected } from "../search/searchByTag.js"
import { setFinalRecipes } from "../setFinalRecipes.js"

export function listenRmvTag (){
    const exitIcns = document.getElementsByClassName('exit-icn')
    for(let i = 0; i < exitIcns.length; i++){
        exitIcns[i].addEventListener('click' ,(e) => {
            const category = e.target.dataset.category
            const tag = e.target.previousElementSibling.textContent

            let tags = [...tagsSelected.get(category)]
   
            const indexTag = tags.indexOf(tag)

            tags.splice(indexTag, 1)

            tagsSelected.set(category, tags)

            displayTagsSelected()
            searchByTagsSelected()
            tagFactory(tag, category).createTagLiDom()

            const inputSearch = document.getElementById('search-input')
            if(tagsSelected.get('ingredients').length == 0 
            && tagsSelected.get('ustensils').length == 0 
            && tagsSelected.get('appliances').length == 0 
            && (inputSearch.value == 'Rechercher une recette' || inputSearch.value == '')){
                displayRecipes(initRecipes)
            } else {
                displayRecipes(setFinalRecipes())
            }
        })
    }
}