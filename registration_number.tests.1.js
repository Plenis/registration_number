describe('registrationOpp' , function(){

    it('should display reg number for Cape Town on the screen' , function(){
        let input = registrationOpp();
        input.addReg("CA 125258")
        assert.equal(input.displayTown(),["CA 125258"])
    })

    it('should display reg number for Bellville on screen' , function(){
        let input = registrationOpp();
        input.addReg("CL 458")
        assert.equal(input.displayTown(),["CL 458"])
    })

    it('should display reg number for Paarl on screen' , function(){
        let input = registrationOpp();
        input.addReg("CY 585 458")
        assert.equal(input.displayTown(),["CY 585 458"])
    })

    it('should display reg numbers containing CA if Cape Town is selected ' , function(){
        let input = registrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.equal(input.displayTown(),"CA 567 890")
        assert.equal(input.displayTown(), "CA 8775")
    })

    it('should display reg numbers containing CL if Bellville is selected ' , function(){
        let input = registrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CL 246 894")
        input.addReg("CL 458")
        input.addReg("CL 444 555")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.equal(input.displayTown(), "CL 246 894")
        assert.equal(input.displayTown(), "CL 458")
        assert.equal(input.displayTown(), "CL 444 555")
    })

    it('should display reg numbers containing CY if Paarl is selected ' , function(){
        let input = registrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CY 585 458")
        input.addReg("CY 246 894")
        input.addReg("CL 246 894")
        input.addReg("CY 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.equal(input.displayTown(),"CY 585 458")
        assert.equal(input.displayTown(), "CY 15875")
        assert.equal(input.displayTown(), "CY 894")
        assert.equal(input.displayTown(), "CY 246 894")
    })

    
})