export function tagFactory(tag, category){

    function createTagLiDom(){

        let li = document.createElement('li')
        li.setAttribute('class', 'li-filter')
        li.dataset.category = category 
        li.textContent = tag

        let contain

        switch(category){
            case 'ingredients':
                contain = document.getElementById('ingredients-list').lastElementChild
                contain.appendChild(li)  
                break
            case 'appliances':
                contain = document.getElementById('appareils-list').lastElementChild
                contain.appendChild(li)  
                break
            case 'ustensils':
                contain = document.getElementById('ustensiles-list').lastElementChild
                contain.appendChild(li)  
                break
        }
    }

    function createTagSelectedDOm(){
        const contain = document.getElementById('selected-filters')

        let div = document.createElement('div')
        div.setAttribute('class', 'tag')
        let span = document.createElement('span')
        span.setAttribute('class', 'span-filter')
        span.dataset.category = category
        span.textContent = tag
        switch(category){
            case 'ingredients' :
                div.style.backgroundColor = '#3282F7'
                break
            case 'appliances' :
                div.style.backgroundColor = '#68D9A4'
                break
            case 'ustensils' :
                div.style.backgroundColor = '#ED6454'
                break
        }
        let exitIcn = document.createElement('li')
        exitIcn.setAttribute('class', 'fas fa-times-circle exit-icn')
        exitIcn.dataset.category = category
        div.appendChild(span)
        div.appendChild(exitIcn)
        contain.appendChild(div)
    }

    return {createTagLiDom, createTagSelectedDOm}
}