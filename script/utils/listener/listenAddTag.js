import { tagsSelected } from "../../state/state.js";
import { displayLiTags } from "../display/displayLiTags.js";
import { displayRecipes } from "../display/displayRecipes.js";
import { displayTagsSelected } from "../display/displayTagsSelected.js";
import { searchByTagsSelected } from "../search/searchByTag.js";
import { setFinalRecipes } from "../setFinalRecipes.js";

export function listenAddTag(filtersDom){
    var filtersDom = document.getElementsByClassName('li-filter')
    for(let i = 0; i < filtersDom.length; i++){
        filtersDom[i].addEventListener('click',(e) => {

            const element = e.target
            const filterText = e.target.textContent
            const category = e.target.dataset.category
            const tags = [...tagsSelected.get(category), filterText]
            tagsSelected.set(category, tags)
            
            element.remove()
            displayTagsSelected()
            searchByTagsSelected()
            const recipes = setFinalRecipes()
            displayRecipes(recipes)
        })
    };
}