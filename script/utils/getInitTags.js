export function getInitTags(recipes){

    function removeDouble(arrayString){
        // on formate en minuscule pour pouvoir comparer
        let arrayLowerCase = []
        for(let i = 0; i < arrayString.length; i++){
            arrayLowerCase.push(arrayString[i].toLowerCase())
        }
    
        // on retire les doublons
        const arrayUnique = [...new Set(arrayLowerCase)]
        return arrayUnique
    }

    // on récupère tout les ingrédients, appareil et ustensile des recettes

    let ingredients = []
    let appareils = []
    let ustensiles = []
    for(let i = 0; i < recipes.length; i++){

        appareils.push(recipes[i].appliance)

        for(let j=0; j < recipes[i].ingredients.length; j++){
            ingredients.push(recipes[i].ingredients[j].ingredient)
        }

        for(let k = 0; k < recipes[i].ustensils.length; k++){
            ustensiles.push(recipes[i].ustensils[k])
        }
    }

    // on retire les doublons
    const ingredientsUnique = removeDouble(ingredients)
    const appareilsUnique = removeDouble(appareils)
    const ustensilesUnique = removeDouble(ustensiles)


    // on renvoie l'objet filters
    let filters = new Map([
        ['ingredients',ingredientsUnique],
        ['appliances', appareilsUnique],
        ['ustensils', ustensilesUnique]
    ])

    return filters
}