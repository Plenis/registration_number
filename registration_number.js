function RegistrationOpp() {
    var storedReg = [];
    let getTown;

    function addReg(regNumber) {
        regNumber = regNumber.toUpperCase();
        getTown = regNumber;
        if(!storedReg.includes(regNumber)){

            storedReg.push(regNumber)
        }
      
    }

    function getReg() {
        return storedReg;
    }
    function filter(location) {
        var countReg = [];
        // console.log(storedReg);

        

        for (var i = 0; i < storedReg.length; i++) {

            var car = storedReg[i];
            // console.log(car) ca 23333 

            if (car.startsWith(location)) {
                countReg.push(car)
            }
        }//  console.log(countReg.length)
        return countReg
    }



    function regCheck(cars, code) {
        return cars.startsWith(code)
    }

    function displayPlate() {
        return storedReg;
    }

    function displayTown() {
        return getTown;
    }

    function getList() {
        return storedReg
    }

    return {
        regCheck,
        filter,
        addReg,
        displayPlate,
        displayTown,
        getReg,
        getList,
    }
}