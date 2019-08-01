function registrationOpp() {
    var storedReg = [];
    let getTown;
    function addReg(regNumber){
        getTown = regNumber;
        storedReg.includes(regNumber)
        storedReg.push(regNumber)
    }

    function filter(registration, location){
            var countReg = [];

             for (var i=0;i<registration;i++){
                var car = registration[i];
              console.log(car)
               
               if (car.startsWith(location)){
                 countReg.push(car)
               }
             }//  console.log(countReg.length)
             return countReg
           }
    


    function regCheck(cars, code) {
        return cars.endsWith(code)
    }
    function displayPlate(){
        return storedReg;
    }

    function displayTown(){
        return getTown;
    }

    return{
        regCheck,
        filter,
        addReg,
        displayPlate,
        displayTown,
    }
}