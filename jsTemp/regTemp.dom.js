var addBtnTemp = document.querySelector(".addRegTemp");
var regCheckTemp = document.querySelector("#regCheckTemp");
var displayRegTemplate = document.querySelector(".displayRegTemplate");
var displayTownTemp = document.querySelector("#displayTown");
// var addRegTemp = document.querySelector("#addReg");
var numberPlateTemp = document.querySelector(".enteredRegNumTemp");
var townsTemp = document.querySelector(".townsTemp");
var clearBtnTemp = document.querySelector(".clearRegTemp");
var displayRegDiv = document.querySelector(".displayRegTemplate");

var registrationTemp = JSON.parse(localStorage.getItem("tempPlate"));

var instanceTemp = RegistrationOpp(registrationTemp);
// instanceTemp.displayReg(instanceTemp.getRegNumbers());

var templateSource = document.querySelector(".regTemplate").innerHTML;
var regTemplate = Handlebars.compile(templateSource);

var errMessageTemp = document.querySelector(".errorMsgTemp");
var posMessageTemp = document.querySelector(".positiveMsgTemp");

//called on function that contains all data underneath templated regs to appear after refresh
townsFilterTemp()

function clearErrorTemp() {
  setTimeout(function() {
    errMessageTemp.innerHTML = "";
  }, 2000);
}

function clearMsgTemp() {
  setTimeout(function() {
    posMessageTemp.innerHTML = "";
  }, 2000);
}

function regDisplayBtnTemp() {
  var plateTemp = numberPlateTemp.value.toUpperCase();
  var regexTemp = /^[A-Z]{2}\s\d[-0-9\s]{1,7}$/;
  var resultTemp = regexTemp.test(plateTemp);
  console.log("resultTemp", resultTemp);
  if (resultTemp !== true) {
    posMessageTemp.innerHTML = "";
    clearErrorTemp();
    errMessageTemp.innerHTML =
      "Invalid registration number - town not supported.";
  } else if (instanceTemp.addReg(plateTemp.toUpperCase())) {
    displayRegTemp(instanceTemp.getRegNumbers());
    posMessageTemp.innerHTML = instanceTemp.regMsg();
    clearMsgTemp();
    // setting local storage
    localStorage.setItem("tempPlate", JSON.stringify(instanceTemp.storedReg));
  } else {
    errMessageTemp.innerHTML = instanceTemp.regMsg();
    clearErrorTemp();
  }
}

function townsFilterTemp() {
  var tempTown = townsTemp.value;
  var tempFilteredReg = instanceTemp.filter(tempTown);
  displayRegTemp(tempFilteredReg);
}

function clearRegBtnTemp() {
  localStorage.removeItem('tempPlate');
  errMessageTemp.innerHTML = "";
  posMessageTemp.innerHTML = "";
  displayRegTemplate.innerHTML = "";
  location.reload();
}

function displayRegTemp(regList) {
  var regData = { plates: regList };
  var regDataHTML = regTemplate(regData);
  console.log(regDataHTML)
  displayRegDiv.innerHTML = regDataHTML;
}

addBtnTemp.addEventListener("click", regDisplayBtnTemp);

townsTemp.addEventListener("change", townsFilterTemp);

clearBtnTemp.addEventListener("click", clearRegBtnTemp);
