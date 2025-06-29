var logoutButton = document.querySelector("#logoutButton");
var welcomeMsg = document.querySelector("#welcomeMsg");
var nameUserlogin = localStorage.getItem("nameUserlogin");
if (nameUserlogin) {
  welcomeMsg.innerText = `Welcome ${nameUserlogin}`;
} else {
  window.location.replace("login.html");
}
logoutButton.addEventListener("click", function () {
  localStorage.removeItem("nameUserlogin");
  window.location.replace("login.html");
});
