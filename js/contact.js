import {checkLength, validateEmail} from "./components/validator.js";

const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 4) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (subject.value.length > 14) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (message.value.length > 24) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

}

form.addEventListener("submit", validateForm);

