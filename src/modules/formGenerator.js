import generatePassword from "./generators"

const button = document.querySelector("#generate-password");
const fieldPassword = document.querySelector("#password");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const sizeOfCharacter = Number(document.querySelector("#size").value);
    const upperCase = document.querySelector("#include-uppercase").checked;
    const lowerCase = document.querySelector("#include-lowercase").checked;
    const number = document.querySelector("#include-number").checked;
    const specialCharacter = document.querySelector("#include-special-character").checked;

    if(!validate(
        sizeOfCharacter, 
        upperCase,
        lowerCase,
        number,
        specialCharacter,

    )) return;
    
    const password = generatePassword(
        sizeOfCharacter,
        upperCase,
        lowerCase,
        number,
        specialCharacter
    );
    
    fieldPassword.innerText = password;
});

function validate(size, upper, lower, number, special) {
    if (!size) {
        alert("Informe a quantidade de caracteres");
        return false;
    }

    if (
        !upper &&
        !lower &&
        !number &&
        !special
    ) {
        alert("Selecione ao menos um tipo de caractere");
        return false;
    }

    return true;
}