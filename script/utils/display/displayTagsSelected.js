import { tagFactory } from "../../factory/tagFactory.js";
import { tagsSelected } from "../../state/state.js";
import { listenRmvTag } from "../listener/listenRmvTag.js";

export function displayTagsSelected(){
    const contain = document.getElementById('selected-filters')
    contain.innerHTML = ""
    
    tagsSelected.forEach((arrayTag, category) => {
        arrayTag.forEach(tag => tagFactory(tag, category).createTagSelectedDOm())
    });
    listenRmvTag()
}