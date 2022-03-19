export function recipeFactory(recipe){

    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipe

    function createIngredientList(ingredientArray){
        const ingredientList = document.createElement('ul')
        ingredientList.setAttribute('class', 'ingredients-list')

        for(let i = 0; i<ingredientArray.length; i++){
            const ingredientLine = document.createElement('li')
            ingredientLine.setAttribute('class', 'ingredient')
            let text = ingredientArray[i].ingredient + ' : '
            if(ingredientArray[i].quantity){
                text += ingredientArray[i].quantity
                if(ingredientArray[i].unit){
                    text += ' ' + ingredientArray[i].unit
                }
            }

            ingredientLine.textContent = text

            ingredientList.appendChild(ingredientLine)
        }

        return ingredientList
    }

    function createRecipeCardDOM(){
        const article = document.createElement('article')

        const imgWrap = document.createElement('div')
        imgWrap.setAttribute('class', 'img-wrap')

        const img = document.createElement('img')
        imgWrap.appendChild(img)

        const textWrap = document.createElement('div')
        textWrap.setAttribute('class', 'text-wrap')

        const titleSpan = document.createElement('span')
        titleSpan.setAttribute('class', 'title-span')
        titleSpan.textContent = name

        const timeSpan = document.createElement('span')
        timeSpan.setAttribute('class', 'time-span')
        timeSpan.textContent = time

        const upDiv = document.createElement('div')
        upDiv.setAttribute('class', 'up-div')
        upDiv.appendChild(titleSpan)
        upDiv.appendChild(timeSpan)

        const ingredientList = createIngredientList(ingredients)

        const descSpan = document.createElement('span')
        descSpan.setAttribute('class', 'desc-span')
        descSpan.textContent = description

        const downDiv = document.createElement('div')
        downDiv.setAttribute('class', 'down-div')
        downDiv.appendChild(ingredientList)
        downDiv.appendChild(descSpan)

        textWrap.appendChild(upDiv)
        textWrap.appendChild(downDiv)

        article.appendChild(imgWrap)
        article.appendChild(textWrap)

        return article
    }

    return { createRecipeCardDOM }
}
