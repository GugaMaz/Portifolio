// Seleção de Elementos
const generatePasswordButton = document.querySelector('#generate-password')
const generatedPasswordButton = document.querySelector('#generated-password')

// Funções 
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = "!@#$%¨&*()_+=-{}[]^~<>;:/?°ºª|*-+.,`'";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = ''

    const passwordLenght = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLenght ; i = i + 4) {
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            password += randomValue
        })
    }

    console.log(password)

}



// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    )
    
})