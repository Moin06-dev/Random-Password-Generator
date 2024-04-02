const passwordBox = document.getElementById("password");

const lenght = 12;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
let symbol = "!@#$%^&*()_-+={}[]|\\?/.,:;"

const allChars = UpperCase + lowerCase +numbers +symbol;

function createPassword(){
    let password = "";
    password += UpperCase[Math.floor(Math.random()* UpperCase.length)]
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password += numbers[Math.floor(Math.random()* numbers.length)]
    password += symbol[Math.floor(Math.random()* symbol.length)]


    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)]

    }
    passwordBox.value = password;

}