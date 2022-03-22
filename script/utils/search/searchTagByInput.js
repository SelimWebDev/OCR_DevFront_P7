import { filteredAppTag, filteredIngTag, filteredUstTag, initTags } from "../../state/state.js";

export function searchTagByInput(input, category){

    
    const tags = initTags.get(category)
    filteredIngTag.length = 0
    filteredAppTag.length = 0
    filteredUstTag.length = 0
    for(let i = 0; i < tags.length; i++){
        if(tags[i].includes(input)){
            switch(category){
                case 'ingredients': 
                    filteredIngTag.push(tags[i])
                    break
                case 'appliances': 
                    filteredAppTag.push(tags[i])
                    break
                case 'ustensils': 
                    filteredUstTag.push(tags[i])
                    break
            }
        }
    }
}