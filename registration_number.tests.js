describe('registrationOpp' , function(){

    it('should display reg number for Cape Town on the screen' , function(){
        let input = RegistrationOpp();
        input.addReg("CA 125258")
        assert.deepEqual(input.getReg(),["CA 125258"])
    })

    it('should display reg number for Bellville on screen' , function(){
        let input = RegistrationOpp();
        input.addReg("CL 458")
        assert.deepEqual(input.getReg(),["CL 458"])
    })

    it('should display reg number for Paarl on screen' , function(){
        let input = RegistrationOpp();
        input.addReg("CY 585 458")
        assert.deepEqual(input.getReg(),["CY 585 458"])
    })

    it('should display reg numbers containing CA if Cape Town is selected ' , function(){
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CA"),["CA 567 890", "CA 8775"])
    })

    it('should display reg numbers containing CL if Bellville is selected ' , function(){
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.equal(input.filter("CL"),"CL 246 894")
    })

    it('should display reg numbers containing CJ if Paarl is selected ' , function(){
        let input = RegistrationOpp();
        input.addReg("CJ 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CJ 8775")
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CJ 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CJ"), ["CJ 567 890", "CJ 246 894", "CJ 8775", "CJ 15875"])
    })

    it('should display all the reg numbers added if Select Town is selected', function(){
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
         assert.deepEqual(input.filter("CJ", "CA", "CY"), [])
    })

    it('should display alert message if reg number is repeated', function(){
        let input = RegistrationOpp();
        input.addReg("CA 246 894")
        input.addReg("CA 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
         assert.deepEqual(input.filter("CJ", "CA", "CY"), [])
    })

    it('should display alert message if reg number is repeated', function(){
        let input = RegistrationOpp();
        input.addReg("CA 246 894")
        input.addReg("CA 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
         assert.deepEqual(input.filter("CJ", "CA", "CY"), [])
    })
})