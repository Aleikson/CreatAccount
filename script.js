
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password_confirmation");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
passwordConfirmation.addEventListener("input", validatePassword);

function validateEmail() {
 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.style.border = "1px solid red";
    emailError.textContent = "Por favor, insira um endereço de e-mail válido";
    emailError.style.color = "red"; 
  } else {
    email.style.border = "";
    emailError.textContent = "";
  }
}

function validatePassword() {
  if (password.value.length < 8) {
    password.style.border = "1px solid red";
    passwordError.textContent = "A senha deve ter pelo menos 8 caracteres";
    passwordError.style.color = "red"; 
  } else if (password.value !== passwordConfirmation.value) {
    password.style.border = "1px solid red";
    passwordError.textContent = "As senhas não são iguais";
  } else {
    password.style.border = "";
    passwordError.textContent = "";
  }
}