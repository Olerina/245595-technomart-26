var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var storage = localStorage.getItem("login");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-write-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-write-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !comment.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-write-show")) {
      popup.classList.remove("modal-write-show");
      popup.classList.remove("modal-error");
    }
  }
});
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});
mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
      mapPopup.classList.remove("modal-content-show");
    }
  }
});
var buy = document.querySelector(".js-item-buy");
var basket = document.querySelector(".modal-basket-show");
var basketClose = basket.querySelector(".modal-content-close");
buy.addEventListener("click", function(event) {
  event.preventDefault();
  basket.classList.add("modal-basket");
});
basketClose.addEventListener("click", function(event) {
  event.preventDefault();
  basket.classList.remove("modal-basket");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (basket.classList.contains("modal-basket")) {
      basket.classList.remove("modal-basket");
    }
  }
});
