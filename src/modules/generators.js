const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const includeUpperCase = () => {
    return String.fromCharCode(rand(65, 90));
}

const includeLowerCase = () => {
    return String.fromCharCode(rand(97, 122));
}

const includeNumbers = () => {
    return String.fromCharCode(rand(48, 57));
}

const includeSpecialCharacter = () => {
    const specials = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`";
    return specials[rand(0, specials.length)];      
}

export default function generatePassword(size, upperCase, lowerCase, numbers, special) {
    const arrayPassword = [];
    const getSize = parseInt(size);
    
    for (let i = 0; i < getSize; i++){
        if(upperCase) arrayPassword.push(includeUpperCase());
        if(lowerCase) arrayPassword.push(includeLowerCase());
        if(numbers) arrayPassword.push(includeNumbers());
        if(special) arrayPassword.push(includeSpecialCharacter());
    }

    return arrayPassword.join("").slice(0, getSize);
}
