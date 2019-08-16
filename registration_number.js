function RegistrationOpp() {
    var storedReg = registration || [];

    function addReg(regNumber) {
       var regPlate = regNumber.toUpperCase();
       
        if(!storedReg.includes(regPlate)){

            storedReg.push(regPlate)
        }
        else {
            return "err"
        }
      
    }

    function getRegNumbers() {
        return storedReg;
    }
    function filter(location) {
        var countReg = [];
 
        for (var i = 0; i < storedReg.length; i++) {

            var car = storedReg[i];

            if (car.startsWith(location)) {
                countReg.push(car)
            }
        }
        return countReg
    }



    function regCheck(cars, code) {
        return cars.startsWith(code)
    }

    function displayPlate() {
        return storedReg;
    }

    function getList() {
        return storedReg
    }

    return {
        regCheck,
        filter,
        addReg,
        displayPlate,
        getRegNumbers,
        getList,
    }
}
