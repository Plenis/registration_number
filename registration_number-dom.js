var addBtn = document.querySelector(".addReg");
var regCheckElem = document.querySelector("#regCheck");
// var filterElem = ducument.querySelector("#filter");
var displayPlateElem = document.querySelector(".dispalyPlate");
var displayTownElem = document.querySelector("#displayTown");
var addRegElem = document.querySelector("#addReg");
var numberPlate = document.querySelector(".enteredRegNum");
var dropdownElem = document.querySelector(".dropdown")
var townsElem = document.querySelector(".towns") //CA

var message = document.querySelector('.msg');
var instance = RegistrationOpp();

function clearError() {
	setTimeout(function () {
		message.innerHTML = "";
	}, 2000);
}

function regDisplayBtn() {
    var plate = numberPlate.value;

    var regex = /^[a-z]{2}\s\d[-0-9\s]{1,7}$/;
    var result = regex.test(plate);
    console.log(result)
        var thePlate = document.querySelector("input[name='towns']:checked");


        if(result !== true){
            clearError()
            message.innerHTML = "Registration number not valid! "
        }else{
            instance.addReg(plate)
            displayReg(instance.getReg());
            // message.innerHTML = "Added successfully"

        }
    




}

function displayReg(regArry) {
    displayPlateElem.innerHTML = "";
    for (let index = 0; index < regArry.length; index++) {
        const element = regArry[index];
        createPlates(element)
    }
}


function createPlates(reg) {
    var number = document.createElement("li");
    number.textContent = reg;
    displayPlateElem.appendChild(number);
}

function townsFilter() {
    var town = townsElem.value;
    var filteredReg = instance.filter(town)
    displayReg(filteredReg)
}




addBtn.addEventListener('click', regDisplayBtn)
townsElem.addEventListener('click', townsFilter)