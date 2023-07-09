function openSignInPage() {
  window.location.href = "signIn.html";
}

function openSearchPage() {
  window.location.href = "search.html";
}

const navbarToggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".menu");

navbarToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
