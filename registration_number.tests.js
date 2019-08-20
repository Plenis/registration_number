describe('registrationOpp', function () {

    it('should display reg number for Cape Town on the screen', function () {
        let input = RegistrationOpp();
        input.addReg("CA 125258")
        // input.addReg("CA 125258")
        // input.addReg("dd12345")
        // input.addReg("CY 1234")
        assert.deepEqual(input.getRegNumbers(), ["CA 125258"])
    })

    it('should display reg number for Bellville on screen', function () {
        let input = RegistrationOpp();
        input.addReg("CY 458")
        assert.deepEqual(input.getRegNumbers(), ["CY 458"])
    })

    it('should display reg number for Paarl on screen', function () {
        let input = RegistrationOpp();
        input.addReg("CJ 585 458")
        assert.deepEqual(input.getRegNumbers(), ["CJ 585 458"])
    })

    it('should display duplicated reg numbers as one entry', function () {
        let input = RegistrationOpp();
        input.addReg("CA 125258")
        input.addReg("CA 125258")
        input.addReg("CJ 585 458")
        input.addReg("CJ 585 458")
        input.addReg("CY 458")
        input.addReg("CY 458")
        assert.deepEqual(input.getRegNumbers(), ["CA 125258", "CJ 585 458", "CY 458"])
    })

    it('should display reg numbers containing CA if filter for Cape Town is selected ', function () {
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CA"), ["CA 567 890", "CA 8775"])
    })

    it('should display reg numbers containing CY if filter for Bellville is selected ', function () {
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CY 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CY"), ["CY 246 894", "CY 15875"])
    })

    it('should display reg numbers containing CJ if Paarl is selected ', function () {
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


        // it('should display red alert message if reg number duplication is detected', function () {
        //     let input = RegistrationOpp();
        //     input.addReg("CA 246 894")
        //     input.addReg("CA 246 894")
        //     input.addReg("CY 15875")
        //     input.addReg("CA 8775")
        //     assert.deepEqual(input.addReg(), "This registration number already exists!")
        // })

        // it('should display red error message if invalid reg number is added or if its not from the listed towns', function () {
        //     let input = RegistrationOpp();
        //     input.isValidTown("jhgfds")
        //     // input.isValidTown("CA 246 894")
        //     // input.isValidTown("CY 15875")
        //     // input.isValidTown("CA 8775")
        //     assert.deepEqual(input.addReg(), "Invalid registration number - town not supported.")
        // })

    it('should display green success message if reg number added is valid and town is recognised', function () {
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.regMsg(), "Registration number added successfully!")
    })
})