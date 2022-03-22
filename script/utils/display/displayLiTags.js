import { tagFactory } from "../../factory/tagFactory.js";
import { filteredAppTag, filteredIngTag, filteredUstTag, initTags } from "../../state/state.js";
import { getTags } from "../getTags.js";
import { setFinalRecipes } from "../setFinalRecipes.js";

export function displayLiTags(category){
    let domContain
    if(category == undefined){
        domContain = document.getElementsByClassName('filter-div')
        for(let i = 0; i < domContain.length; i++){
            domContain[i].innerHTML = ""
        }
        const recipes = setFinalRecipes()
        const tags = getTags(recipes)
        tags.forEach((arrayTag, category) => {
            arrayTag.forEach(tag => tagFactory(tag, category).createTagLiDom())
        })

    } else if(category == 'ingredients'){
        domContain = document.getElementById('ingredients-div')
        domContain.innerHTML = ""
        filteredIngTag.forEach(tag => {
            tagFactory(tag, category).createTagLiDom()
        })

    } else if(category == 'appliances'){
        domContain = document.getElementById('appareils-div')
        domContain.innerHTML = ""
        filteredAppTag.forEach(tag => {
            tagFactory(tag, category).createTagLiDom()
        })

    } else if (category == 'ustensils'){
        domContain = document.getElementById('ustensiles-div')
        domContain.innerHTML = ""
        filteredUstTag.forEach(tag => {
            tagFactory(tag, category).createTagLiDom()
        })
    }
}