describe('registrationOpp' , function(){

    it('should display reg number inserted on the screen after entered' , function(){
        let input = registrationOpp();
        input.addReg("CA 125258")
        assert.equal(input.displayTown(),["CA 125258"])
    })
})