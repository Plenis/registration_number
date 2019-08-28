function RegistrationOpp(regPlate) {
    let message = ""
    let storedReg = regPlate || {};

    function isValidTown(regNumber) {
        let regCode = ["CA", "CY", "CJ"];

        for (let index = 0; index < regCode.length; index++) {
            const element = regCode[index];
            if (regNumber.startsWith(element)) {
                // this is a valid town so I can add the reg number...
                return true;
            }
        }
        return false;
    }


    function addReg(regNumber) {
        message = "";

        // check if this reg number already exists    
        if (storedReg[regNumber] === undefined) {
            if (!isValidTown(regNumber)) {
                message = "Invalid registration number - town not supported."
                return false;
            }
            // adding valid reg
            storedReg[regNumber] = 0;

            message = "Registration number added successfully!"
            return true;

        } else {
            // this is a duplicate
            message = "This registration number already exists!";
            return false;
        }

    }

    function regMsg() {
        return message;
    }


    function getRegNumbers() {
        return Object.keys(storedReg);
    }

    function filter(location) {
        var countReg = [];

        for (var plate in storedReg) {
            if (plate.startsWith(location)) {
                countReg.push(plate)
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
        return storedReg;
    }

    return {
        regCheck,
        filter,
        addReg,
        regMsg,
        displayPlate,
        getRegNumbers,
        getList,
        isValidTown,
        storedReg,
    }
}
