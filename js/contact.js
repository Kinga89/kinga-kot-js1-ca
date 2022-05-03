const form = document.querySelector(".contact-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passError = document.querySelector("#passwordError");
const button = document.querySelector(".btn");


function validateForm() {
    event.preventDefault();

    if (validateEmail(email.value) && (validatePassword(password.value) === true))  {
        emailError.style.visibility = "hidden";
        passError.style.visibility = "hidden";
    } else {
        emailError.style.visibility = "visible";
        passError.style.visibility = "visible";
    }
}

form.addEventListener("submit", validateForm);


function validateEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validatePassword(password) {
    const regPass = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    const passwordMatch = regPass.test(password);
    return passwordMatch;
}
