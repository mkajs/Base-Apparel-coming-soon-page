const btn = document.querySelector(".button");
const errorMessage = document.querySelector(".error-message");
const email = document.querySelector(".email");
const errorIcon = document.querySelector(".error-icon");
const form = document.querySelector(".form");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (validateEmail(email.value)) {
    //do something with email.value
    return;
  }

  errorIcon.classList.remove("error-icon--hidden");
  errorMessage.classList.remove("error-message--hidden");
  form.classList.add("form--error");
});
