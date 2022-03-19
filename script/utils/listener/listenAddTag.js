import { tagsSelected } from "../../state/state.js";
import { displayRecipes } from "../display/displayRecipes.js";
import { displayTagsSelected } from "../display/displayTagsSelected.js";
import { searchByTagsSelected } from "../search/searchByTag.js";
import { setFinalRecipes } from "../setFinalRecipes.js";

export function listenAddTag(){
    var filtersDom = document.getElementsByClassName('li-filter')

    for(let i = 0; i < filtersDom.length; i++){
        filtersDom[i].addEventListener('click',(e) => {
            const filterText = e.target.textContent
            const category = e.target.dataset.category
            const tags = [...tagsSelected.get(category), filterText]
            tagsSelected.set(category, tags)
            displayTagsSelected()
            searchByTagsSelected()
            
            displayRecipes(setFinalRecipes())
        })
    };
}