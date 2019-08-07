var addBtn = document.querySelector(".addReg");
var regCheckElem = document.querySelector("#regCheck");
// var filterElem = ducument.querySelector("#filter");
var displayPlateElem = document.querySelector(".dispalyPlate");
var displayTownElem = document.querySelector("#displayTown");
var addRegElem = document.querySelector("#addReg");
var numberPlate = document.querySelector(".enteredRegNum");
var dropdownElem = document.querySelector(".dropdown")
var townsElem = document.querySelector(".towns") //CA


var instance = RegistrationOpp();

function regDisplayBtn() {
    var plate = numberPlate.value;
    instance.addReg(plate)

displayReg(instance.getReg());

}

function displayReg(regArry){
    displayPlateElem.innerHTML = "";
 for (let index = 0; index < regArry.length; index++) {
     const element = regArry[index];
     createPlates(element)
 }
}


function createPlates(reg){
    var number = document.createElement("li");
    number.textContent = reg;
    displayPlateElem.appendChild(number);
}

function townsFilter(){
    var town =townsElem.value;
    var filteredReg = instance.filter(town)
  displayReg(filteredReg)
}




addBtn.addEventListener('click', regDisplayBtn)
townsElem.addEventListener('click', townsFilter)