var addBtn = document.querySelector(".regAddBtn");
var regTownElem = document.querySelector("#regTown");
var regCheckElem = document.querySelector("#regCheck");
var regCodeElem = document.querySelector("#regCode");



if (localStorage['name'] !== undefined) {
    var nameStore = JSON.parse(localStorage['name']);
} else {
    nameStore = {};
}





addBtn.addEventListener('click', resetButton)