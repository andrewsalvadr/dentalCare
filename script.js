const showHide = document.querySelector('i.fa-eye');
const loginPassword = document.getElementById("loginPassword")
const loginUser = document.getElementById("loginPname")
const loginContainer = document.querySelector("containerLog")
const submit = document.getElementById("submit")
const loginForm = document.getElementById("loginForm")
const requestEmail = document.getElementById("requestEmail")

showHide.addEventListener('click', showPass)

function showPass() {
    if (loginPassword.type === "password") {
        loginPassword.type = "text"
    } else {
        loginPassword.type === "text"
        loginPassword.type = "password"
    }
}

loginForm.addEventListener("submit", userpass)

function userpass(event) {
    event.preventDefault() 
    if (loginUser.value === "" || loginUser.value.length < 3) {
        showError(loginUser, "User cannot be empty or less than 3")
        
    } else {
        showSuccess(loginUser)
    }

    if (loginPassword.value === "" || loginPassword.value.length < 7) {
        showError(loginPassword, "Password cannot be empty or less than 7")
    } else {
        showSuccess(loginPassword)
    }

}

function showError(input, message) {
    const formField = input.parentElement;
    formField.className = "form-field error"
    if ((formField.className = "form-field error")) {
        const alert_message = formField.querySelector(".alert-message")
        alert_message.style.visibility = "visible";
        alert_message.style.color = "red";
        alert_message.innerText = message;
    }
}

function showSuccess (input) {
    const formField = input.parentElement;
    formField.className = "form-field error"
    if((formField.className = "form-field error")) {
        const alert_message = formField.querySelector(".alert-message")
      alert_message.style.visibility = "hidden"
      input.style = "green"
    }
}