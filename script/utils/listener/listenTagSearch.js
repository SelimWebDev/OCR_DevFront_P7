import { searchTagByInput } from "../search/searchTagByInput.js"
import { displayLiTags } from "../display/displayLiTags.js"
import { listenAddTag } from "./listenAddTag.js"

export function listenTagSearch(){
    const inputs = document.getElementsByClassName('filter-search')
    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('input', (e) => {
            const category = e.target.dataset.category
            const inputValue = inputs[i].value
            if(inputValue.length >= 3){
                searchTagByInput(inputValue, category)
                displayLiTags(category)
                listenAddTag()
            } else displayLiTags()
                listenAddTag()
        })
    }
}