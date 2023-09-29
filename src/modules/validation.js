const form = document.getElementById("input-form");
const emailInput = document.getElementById("email-input");
const countryInput = document.getElementById("country-input");
const zipInput = document.getElementById("zip-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");
const validCountries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
];

validCountries.forEach((country) => {
  const option = document.createElement("option");
  option.value = country;
  option.text = country;
  countryInput.appendChild(option);
});

const emailCheck = () => {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.setCustomValidity("Invalid");
  } else {
    emailInput.setCustomValidity("");
  }
};

const countryCheck = () => {
  const country = countryInput.value;

  if (!validCountries.includes(country)) {
    countryInput.setCustomValidity("Invalid");
    alert("Please enter a valid country.");
  } else {
    countryInput.setCustomValidity("");
  }
};

const zipCheck = () => {
  const zip = zipInput.value;
  const zipPattern = /^\d{5}$/;

  if (!zipPattern.test(zip)) {
    alert("Please enter a valid zipcode");
    zipInput.setCustomValidity("Invalid");
  } else {
    zipInput.setCustomValidity("");
  }
};

const passwordCheck = (pass1, pass2) => {
  if (!pass1.value || !pass2.value) {
    alert("Password needed");
    passwordInput.setCustomValidity("Invalid");
    passwordConfirmInput.setCustomValidity("Invalid");
  } else if (pass1.value !== pass2.value) {
    alert("Passwords do not match!");
    passwordInput.setCustomValidity("Invalid");
    passwordConfirmInput.setCustomValidity("Invalid");
  } else {
    passwordInput.setCustomValidity("");
    passwordConfirmInput.setCustomValidity("");
  }
};

const validCheck = () => {
  emailCheck();
  countryCheck();
  zipCheck();
  passwordCheck(passwordInput, passwordConfirmInput);
};

emailInput.addEventListener("blur", () => {
  emailCheck();
});

countryInput.addEventListener("blur", () => {
  countryCheck();
});

zipInput.addEventListener("blur", () => {
  zipCheck();
});

passwordInput.addEventListener("blur", () => {
  if (!passwordConfirmInput.value) return;
  passwordCheck(passwordInput, passwordConfirmInput);
});

passwordConfirmInput.addEventListener("blur", () => {
  if (!passwordInput.value) return;
  passwordCheck(passwordConfirmInput, passwordInput);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validCheck();
});

const initValidation = () => {
  console.log("init");
};

export default initValidation;
