export function listenModalClick(){
    function openDropdown(button){
        const dropup = button.firstElementChild
        const dropdown = button.lastElementChild

        dropup.style.display = "none"
        dropdown.style.display = "flex"
    }

    function closeDropdown(button){
        const dropup = button.firstElementChild
        const dropdown = button.lastElementChild

        dropup.style.display = "flex"
        dropdown.style.display = "none"
    }

    const filtersButton = document.getElementsByClassName('filter')
    const closeIcn = document.getElementsByClassName('close-icn')

    for(let i = 0; i < filtersButton.length; i++){ 
        closeIcn[i].addEventListener('click', () => {
            closeDropdown(filtersButton[i])
        }) 
        filtersButton[i].firstElementChild.addEventListener('click', () => {
            openDropdown(filtersButton[i])
        })
    }
}