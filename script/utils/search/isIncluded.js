export function isIncluded(input, sentence){
    sentence = sentence.toLowerCase()
    input = input.toLowerCase()
    for(let i = 0; i < sentence.length - input.length + 1; i++){
        let elmToCompare = ''
        for (let j = 0; j < input.length; j++){
            elmToCompare += sentence[i + j]
        }
        if (input == elmToCompare){
            console.log(sentence)
            return true
        }
    }

    return false
}