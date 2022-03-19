import { displayRecipes } from '../utils/display/displayRecipes.js'
import { displayLiTags } from '../utils/display/displayLiTags.js'
import {listenModalClick} from '../utils/listener/listenModalClick.js'
import { listenInputClick } from '../utils/listener/listenInputClick.js'
import { initRecipes } from '../state/state.js'
import { listenInputSearch } from '../utils/listener/listenInputSearch.js'
import { listenAddTag } from '../utils/listener/listenAddTag.js'
import { listenTagSearch } from '../utils/listener/listenTagSearch.js'

displayRecipes(initRecipes)
displayLiTags()
listenModalClick()
listenInputClick()  //erase input on first click
listenInputSearch()
listenTagSearch()
listenAddTag()
