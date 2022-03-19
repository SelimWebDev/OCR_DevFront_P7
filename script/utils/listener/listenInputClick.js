export function listenInputClick(){
    const inputs = document.getElementsByTagName('input')
    for(let i =0; i < inputs.length; i++){
        inputs[i].addEventListener('click', (event) => {
            event.target.value = ""
        }, {once : true})
    }
}