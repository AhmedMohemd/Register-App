var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var registerbutton = document.querySelector("#registerbutton");
var message = document.querySelector("#message");
userList = [];
if (localStorage.getItem("users")) {
  userList = JSON.parse(localStorage.getItem("users"));
}
userName.addEventListener("input", function () {
  validation("userName");
});
userEmail.addEventListener("input", function () {
  validation("userEmail");
});
userPassword.addEventListener("input", function () {
  validation("userPassword");
});
registerbutton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validation("userName") &&
    validation("userEmail") &&
    validation("userPassword")
  ) {
    var emailExists = userList.some(function (user) {
      return user.userEmail.toLowerCase() === userEmail.value.toLowerCase();
    });
    if (emailExists) {
      message.innerHTML = "Email already exists!";
      message.classList.add("text-danger");
      message.classList.remove("text-success");
      return;
    }
    user = {
      userName: userName.value,
      userEmail: userEmail.value,
      userPassword: userPassword.value,
    };
    userList.push(user);
    localStorage.setItem("users", JSON.stringify(userList));
    localStorage.setItem("nameUserlogin", user.userName);
    console.log(userList);
    message.innerHTML = "Account Created Successfully!";
    message.classList.add("text-success");
    message.classList.remove("text-danger");
    clearInputs();
  } else {
    message.innerHTML = "Please enter valid data.";
    message.classList.add("text-danger");
    message.classList.remove("text-success");
  }
});
function clearInputs() {
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
  userName.classList.remove("is-valid", "is-invalid");
  userEmail.classList.remove("is-valid", "is-invalid");
  userPassword.classList.remove("is-valid", "is-invalid");
}
function validation(id) {
  var regex = {
    userName: /^[A-Z][a-zA-Z0-9 ]{2,29}$/,
    userEmail: /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail)\.com$/,
    userPassword: /^(?=.*[A-Z])(?=.*\d)(?=.*[#$_\.])[A-Za-z\d#$_\.]{8,}$/,
  };
  var userInput = document.getElementById(id);
  var testValidatoin = userInput.value;
  if (regex[id].test(testValidatoin)) {
    userInput.classList.remove("is-invalid");
    userInput.classList.add("is-valid");
    return true;
  } else {
    userInput.classList.remove("is-valid");
    userInput.classList.add("is-invalid");
    return false;
  }
}
