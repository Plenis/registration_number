var addBtn = document.querySelector(".addReg");
var regCheckElem = document.querySelector("#regCheck");
var displayPlateElem = document.querySelector(".dispalyPlate");
var displayTownElem = document.querySelector("#displayTown");
var addRegElem = document.querySelector("#addReg");
var numberPlate = document.querySelector(".enteredRegNum");
var dropdownElem = document.querySelector(".dropdown")
var townsElem = document.querySelector(".towns") //CA
var clearBtn = document.querySelector(".clearReg")

//getting local storage

var registration = JSON.parse(localStorage.getItem('plates'));

//calling on factory function as instance
var instance = RegistrationOpp(registration);

//calling on function to get reg numbers to display
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
        errMessage.innerHTML = "Invalid registration number - town not supported."
    }
    else if (instance.addReg(plate.toUpperCase())) {
        displayReg(instance.getRegNumbers());
        posMessage.innerHTML = instance.regMsg();
        clearMsg();
        // setting local storage
        localStorage.setItem("plates", JSON.stringify(instance.storedReg));
    } else {
        errMessage.innerHTML = instance.regMsg();
        clearError();
    }
}

function displayReg(reg) {
    displayPlateElem.innerHTML = "";
    for (var x in reg) {
        const element = reg[x];
        createPlates(element)
    }
}

function createPlates(reg) {
    var li = document.createElement("li");
    li.textContent = reg;
    displayPlateElem.appendChild(li);
}

function townsFilter() {
    var town = townsElem.value;
    var filteredReg = instance.filter(town)
    displayReg(filteredReg)
}

function clearRegBtn() {
    localStorage.removeItem('plates');
    errMessage.innerHTML = "";
    posMessage.innerHTML = "";
    displayPlateElem.innerHTML = "";
    location.reload()
}




addBtn.addEventListener('click', regDisplayBtn)

townsElem.addEventListener('change', townsFilter)

clearBtn.addEventListener('click', clearRegBtn)