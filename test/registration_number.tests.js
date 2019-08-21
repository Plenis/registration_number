describe('registrationOpp', function () {

    it('should display valid reg numbers containing CA for the town Cape Town', function () {
        let input = RegistrationOpp();
        input.addReg("CA 125258")
        input.addReg("CA 987 456")
        assert.deepEqual(input.getRegNumbers(), ["CA 125258", "CA 987 456"])
    })

    it('should display valid reg numbers containg CY for the town Bellville', function () {
        let input = RegistrationOpp();
        input.addReg("CY 458")
        input.addReg("CY 876456")
        input.addReg("CY 459 008")
        assert.deepEqual(input.getRegNumbers(), ["CY 458", "CY 876456", "CY 459 008"])
    })

    it('should display valid reg numbers containing CJ for the town Paarl', function () {
        let input = RegistrationOpp();
        input.addReg("CJ 585 458")
        input.addReg("CJ 786 678")
        assert.deepEqual(input.getRegNumbers(), ["CJ 585 458", "CJ 786 678"])
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

    it('should display reg numbers containing CA only, if filtered for Cape Town', function () {
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CA"), ["CA 567 890", "CA 8775"])
    })

    it('should display reg numbers containing CY only, if filtered for Bellville', function () {
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CY 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.filter("CY"), ["CY 246 894", "CY 15875"])
    })

    it('should display reg numbers containing CJ only, if filtered for Paarl', function () {
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

    it('should display success message if reg number added is valid and town is recognised', function () {
        let input = RegistrationOpp();
        input.addReg("CA 567 890")
        input.addReg("CJ 246 894")
        input.addReg("CY 15875")
        input.addReg("CA 8775")
        assert.deepEqual(input.regMsg(), "Registration number added successfully!")
    })
})