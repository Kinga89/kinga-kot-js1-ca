const form = document.querySelector(".contact-form");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const nameErrSec = document.querySelector("#nameError2");

const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector("#lastNameError");
const lastNameErrSec = document.querySelector("#lastNameError2");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const button = document.querySelector(".btn");
const validationPassed = document.querySelector(".validation-passed");

function validateForm() {
    event.preventDefault();
    console.log(event);

    /*Checks if the first name field is filled out*/
    if (!firstName.value) {
        nameError.style.display = "block";
        firstName.style.borderColor = "red";
    } else {
        nameError.style.display = "none";
        firstName.style.borderColor = "#4cd038";
    }

    /*Checks if the first name contains at least 2 characters*/
    if (checkLength(firstName.value, 1) === true) {
        nameErrSec.style.display = "none";
    } else {
        nameErrSec.style.display = "block";
        firstName.style.borderColor = "red";
    }

    /*Checks if the last name field is filled out*/
    if (!lastName.value) {
        lastNameError.style.display = "block";
        lastName.style.borderColor = "red";
    } else {
        lastNameError.style.display = "none";
        lastName.style.borderColor = "#4cd038";
    }

    /*Checks if the last name contains at least 2 characters*/
    if (checkLength(lastName.value, 1) === true) {
        lastNameErrSec.style.display = "none";
        lastName.style.borderColor = "#4cd038";
    } else {
        lastNameErrSec.style.display = "block";
        lastName.style.borderColor = "red";
    }

    /*Checks if the subject field has at least 10 characters*/
    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
        subject.style.borderColor = "#4cd038";
    } else {
        subjectError.style.display = "block";
        subject.style.borderColor = "red";
    }

    /*Checks if the email address is correct*/
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        email.style.borderColor = "#4cd038";
    } else {
        emailError.style.display = "block";
        email.style.borderColor = "red";
    }

    /*Checks if the address field has at least 25 characters*/
    if (addressLength(address.value, 25) === true) {
        addressError.style.display = "none";
        address.style.borderColor = "#4cd038";
    } else {
        addressError.style.display = "block";
        address.style.borderColor = "red";
    }
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(subject.value);
    console.log(email.value);
    console.log(address.value);

    let validForm =
        checkLength(firstName.value, 1) &&
        checkLength(lastName.value, 1) &&
        checkLength(subject.value, 10) &&
        validateEmail(email.value) &&
        addressLength(address.value, 25);

    if (validForm === false) {
        validationPassed.style.display = "none";
    } else {
        validationPassed.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function addressLength(value, length) {
    if (value.length > length) {
        return true;
    } else {
        return false;
    }
}
