const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorEmailMessage = document.getElementById("error-email");
const consent = document.getElementById("consent");
const errorConsent = document.getElementById("error-consent");
const popup = document.querySelector(".popup");

function submitForm(ev) {
  ev.preventDefault();

  if (onChangeConsent()) {
    popup.style.display = "block";
  }
}

function onInputEmail() {
  if (emailInput.value.trim() === "") {
    errorEmailMessage.innerText = "This field is required";
  } else {
    errorEmailMessage.innerText = "Please enter a valid email address";
  }
}

function onChangeConsent() {
  if (consent.checked) {
    errorConsent.style.display = "none";
  } else {
    errorConsent.style.display = "inline-block";
  }
  return consent.checked;
}

(function init() {
  form.addEventListener("submit", submitForm);
  emailInput.addEventListener("input", onInputEmail);
  consent.addEventListener("change", onChangeConsent);
})();
