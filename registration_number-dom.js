var addBtn = document.querySelector(".addReg");
var regCheckElem = document.querySelector("#regCheck");
// var filterElem = ducument.querySelector("#filter");
var displayPlateElem = document.querySelector(".dispalyPlate");
var displayTownElem = document.querySelector("#displayTown");
var addRegElem = document.querySelector("#addReg");
var numberPlate = document.querySelector(".enteredRegNum");
var dropdownElem = document.querySelector(".dropdown")
var townsElem = document.querySelector(".towns") //CA
var clearBtn = document.querySelector(".clearReg")

if (localStorage['plate'] !== undefined) {
    var registration = JSON.parse(localStorage['plate']);
} else {
    registration = [];
}

var instance = RegistrationOpp(registration);


var errMessage = document.querySelector('.ErrorMsg');
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
    var plate = numberPlate.value;

    var regex = /^[a-z]{2}\s\d[-0-9\s]{1,7}$/;
    var result = regex.test(plate);
    console.log(result)
    // var thePlate = document.querySelector("input[name='towns']:checked");

    if (result !== true) {
        posMessage.innerHTML = ""
        clearError()
        errMessage.innerHTML = "Invalid entry!"
    }
     if (instance.addReg(plate.toUpperCase())) {
        posMessage.innerHTML = ""
        clearError()
        errMessage.innerHTML = "This already exists!"
    }
    else {
        instance.addReg(plate)
        clearMsg()
        displayReg(instance.getReg());
        posMessage.innerHTML = "Added successfully!"

    }
    localStorage['plate'] = JSON.stringify(instance.getReg())
}

function displayReg(regArry) {
    displayPlateElem.innerHTML = "";
    for (let index = 0; index < regArry.length; index++) {
        const element = regArry[index];
        createPlates(element)
    }
}


function createPlates(reg) {
  //  console.log(reg)
    var number = document.createElement("li");
    number.textContent = reg;
    displayPlateElem.appendChild(number);
}

function townsFilter() {
    var town = townsElem.value;
    var filteredReg = instance.filter(town)
    displayReg(filteredReg)
}

function clearRegBtn(){
    localStorage.clear();
    errMessage.innerHTML = "";
    posMessage.innerHTML = "";
   displayPlateElem.innerHTML = "";
   location.reload()
}




addBtn.addEventListener('click', regDisplayBtn)
townsElem.addEventListener('click', townsFilter)
clearBtn.addEventListener('click', clearRegBtn)