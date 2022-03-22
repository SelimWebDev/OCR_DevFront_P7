import { data } from '../../data/recipes.js'
import { getTags } from '../utils/getTags.js'

const initRecipes = data
let filteredInputRecipes = []
let filteredTagRecipes = []
//let finalFilteredRecipes = []


const initTags = getTags(initRecipes)

let filteredIngTag = []
let filteredAppTag = []
let filteredUstTag = []

let updateIngTag = []
let updateAppTag = []
let updateUstTag = []

let tagsSelected = new Map([
    ['ingredients', []],
    ['appliances', []],
    ['ustensils', []]
])


export { initRecipes,filteredTagRecipes, filteredInputRecipes, initTags, tagsSelected, filteredIngTag, filteredAppTag, filteredUstTag}