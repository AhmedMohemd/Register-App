var userEmail = document.querySelector("#userEmail");
var userPassword = document.querySelector("#userPassword");
var signupbutton = document.querySelector("#signupbutton");
var message = document.getElementById("message");
userList = [];
if (localStorage.getItem("users")) {
  userList = JSON.parse(localStorage.getItem("users"));
}
console.log(userList);
signupbutton.addEventListener("click", function (e) {
  e.preventDefault();

  if (userEmail.value === "" || userPassword.value === "") {
    message.innerHTML = "All inputs are required!";
    message.classList.add("text-danger");
    message.classList.remove("text-success");
    return;
  }
  var flage = false;
  for (var i = 0; i < userList.length; i++) {
    if (
      userEmail.value == userList[i].userEmail &&
      userPassword.value == userList[i].userPassword
    ) {
      flage = true;
      localStorage.setItem("nameUserlogin", userList[i].userName);
      window.location.replace("../html/home.html");
      break;
    }
  }
  if (!flage) {
    message.innerHTML = "Incorrect email or password.";
    message.classList.add("text-danger");
    message.classList.remove("text-success");
  }
});
