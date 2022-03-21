import { data } from '../../data/recipes.js'
import { getInitTags } from '../utils/getInitTags.js'

const initRecipes = data
let filteredInputRecipes = []
let filteredTagRecipes = []
//let finalFilteredRecipes = []


const initTags = getInitTags(initRecipes)

let filteredIngTag = []
let filteredAppTag = []
let filteredUstTag = []

let tagsSelected = new Map([
    ['ingredients', []],
    ['appliances', []],
    ['ustensils', []]
])


export { initRecipes,filteredTagRecipes, filteredInputRecipes, initTags, tagsSelected, filteredIngTag, filteredAppTag, filteredUstTag}