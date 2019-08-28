var addBtnTemp = document.querySelector(".addRegTemp");
var regCheckTemp = document.querySelector("#regCheck");
var displayPlateTemp = document.querySelector(".dispalyPlateTemp");
var displayTownTemp = document.querySelector("#displayTown");
var addRegTemp = document.querySelector("#addReg");
var numberPlateTemp = document.querySelector(".enteredRegNumTemp");
var dropdownTemp = document.querySelector(".dropdown")
var townsTemp = document.querySelector(".townsTemp") //CA
var clearBtnTemp = document.querySelector(".clearRegTemp")

//getting local storage

var registrationTemp = JSON.parse(localStorage.getItem('plates'));

var instanceTemp = RegistrationOpp(registrationTemp);

//calling on function to get reg numbers to display
displayReg(instanceTemp.getRegNumbers());


var errMessageTemp = document.querySelector('.errorMsgTemp');
var posMessageTemp = document.querySelector('.positiveMsgTemp')


function clearErrorTemp() {
    setTimeout(function () {
        errMessageTemp.innerHTML = "";
    }, 2000);
}

function clearMsgTemp() {
    setTimeout(function () {
        posMessageTemp.innerHTML = "";
    }, 2000);
}

function regDisplayBtnTemp() {
    var plateTemp = numberPlateTemp.value.toUpperCase();
    var regexTemp = /^[A-Z]{2}\s\d[-0-9\s]{1,7}$/;
    var resultTemp = regexTemp.test(plate);

    if (resultTemp !== true) {
        posMessageTemp.innerHTML = ""
        clearErrorTemp()
        errMessageTemp.innerHTML = "Invalid registration number - town not supported."
    }
    else if (instanceTemp.addReg(plateTemp.toUpperCase())) {
        displayReg(instanceTemp.getRegNumbers());
        posMessageTemp.innerHTML = instanceTemp.regMsg();
        clearMsgTemp();
        // setting local storage
        localStorage.setItem("plates", JSON.stringify(instanceTemp.storedReg));
    } else {
        errMessageTemp.innerHTML = instanceTemp.regMsg();
        clearErrorTemp();
    }
}

function displayRegTemp(regTemp) {
    displayPlateElem.innerHTML = "";
    for (var x in regTemp) {
        const tempElement = regTemp[x];
        console.log(tempElement)
        createPlates(tempElement)
    }
}

function createPlates(regTemp) {
    var tempList = document.createElement("li");
    tempList.textContent = regTemp;
    displayPlateTemp.appendChild(tempList);
}

function townsFilterTemp() {
    var tempTown = townsTemp.value;
    var tempFilteredReg = instanceTemp.filter(tempTown)
    displayReg(tempFilteredReg).appendChild(tempTown)
}

function clearRegBtnTemp() {
    localStorage.clear();
    errMessageTemp.innerHTML = "";
    posMessageTemp.innerHTML = "";
    displayPlateTemp.innerHTML = "";
    location.reload()
}




addBtnTemp.addEventListener('click', regDisplayBtnTemp)

townsTemp.addEventListener('change', townsFilterTemp)

clearBtnTemp.addEventListener('click', clearRegBtnTemp)