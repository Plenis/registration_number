var addBtn = document.querySelector(".addReg");
var regCheckElem = document.querySelector("#regCheck");
var displayPlateElem = document.querySelector(".dispalyPlate");
var displayTownElem = document.querySelector("#displayTown");
var addRegElem = document.querySelector("#addReg");
var numberPlate = document.querySelector(".enteredRegNum");
var dropdownElem = document.querySelector(".dropdown")
var townsElem = document.querySelector(".towns") //CA
var clearBtn = document.querySelector(".clearReg")

var registration = {};

if (localStorage['plate'] !== undefined) {
    registration = JSON.parse(localStorage['plate']);
    console.log(registration)
}

var instance = RegistrationOpp(registration);

displayReg(instance.getRegNumbers());

var errMessage = document.querySelector('.errorMsg');
var posMessage = document.querySelector('.positiveMsg')


function clearError() {
    setTimeout(function () {
        errMessage.innerHTML = "";
    }, 2000);
}

function clearMsg() {
    setTimeout(function () {
        posMessage.innerHTML = "";
    }, 2000);
}

function regDisplayBtn() {
    var plate = numberPlate.value.toUpperCase();
    var regex = /^[A-Z]{2}\s\d[-0-9\s]{1,7}$/;
    var result = regex.test(plate);

    if (result !== true) {
        posMessage.innerHTML = ""
        clearError()
        errMessage.innerHTML = "Invalid regis tration number - town not supported."
    }
    else if (instance.addReg(plate.toUpperCase())) {
        displayReg(instance.getRegNumbers());
        posMessage.innerHTML = instance.regMsg();
        clearMsg();
    } else {
        errMessage.innerHTML = instance.regMsg();
        clearError();
    }
    localStorage['plate'] = JSON.stringify(instance.getRegNumbers());
}

function displayReg() {

    displayPlateElem.innerHTML = "";
    for (let index = 0; index < registration.length; index++) {
        const element = registration[index];

        createPlates(element)
    }
}


function createPlates(reg) {
    console.log(reg)
    var number = document.createElement("li");
    number.textContent = reg;
    displayPlateElem.appendChild(number);
}

function townsFilter() {
    var town = townsElem.value;
    var filteredReg = instance.filter(town)
    displayReg(filteredReg).appendChild(town)
}

function clearRegBtn() {
    localStorage.clear();
    errMessage.innerHTML = "";
    posMessage.innerHTML = "";
    displayPlateElem.innerHTML = "";
    location.reload()
}




addBtn.addEventListener('click', regDisplayBtn)
townsElem.addEventListener('change', townsFilter)
clearBtn.addEventListener('click', clearRegBtn)