function RegistrationOpp(regi) {
    var storedReg = regi || [];
    // let getTown;

    function addReg(regNumber) {
       var regPlate = regNumber.toUpperCase();
        // getTown = regNumber;
        if(!storedReg.includes(regPlate)){

            storedReg.push(regPlate)
        }
        else {
            return "err"
        }
      
    }

    // function regDuplicate(plate){
    //     return storedReg.includes(plate)
    // }

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
        // regDuplicate,
    }
}
