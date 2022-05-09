describe("The bill with settings factory function", function(){
    it("should be able set call cost",function(){
        var settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.75);
        assert.equal(1.75, settingsBill.getCallCost())


        var settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.00);
        assert.equal(2.00, settingsBill2.getCallCost())
    })

    it("should be able set sms cost",function(){
        var settingsBill = BillWithSettings();
        settingsBill.setSmsCost(1.75);
        assert.equal(1.75, settingsBill.getSmsCost())


        var settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(2.00);
        assert.equal(2.00, settingsBill2.getSmsCost())
    })

    it("should be able set sms and call cost",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.75);


        assert.equal(0.75, settingsBill.getSmsCost())
        assert.equal(1.35, settingsBill.getCallCost())


        var settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(2.75);
        settingsBill2.setSmsCost(1.35);


        assert.equal(1.35, settingsBill2.getSmsCost())
        assert.equal(2.75, settingsBill2.getCallCost())
    })
})

describe("The bill to calculate", function(){
    it("should be able set ",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(2.00);

        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();


        assert.equal(11, settingsBill.getTotalCost());
        assert.equal(7, settingsBill.getTotalCallCost());
        assert.equal(4.00, settingsBill.getTotalSmsCost());
    })
})
describe("critical and warning level", function(){
    it("should return a class name of 'warning' if warning level is reached ",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(2.00);
        settingsBill.setWarningLevel(10);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal("warning", settingsBill.totalClassName());
        
    })
})