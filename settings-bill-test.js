describe("The bill with settings factory function", function(){

describe("set values", function(){
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

    it("should be able set the warning level",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(10);

        assert.equal(10, settingsBill.getWarningLevel())

    })

    it("should be able set the critical level",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(30);

        assert.equal(30, settingsBill.getCriticalLevel())

    })

    it("should be able set the critical and warning level",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(30);
        settingsBill.setWarningLevel(10);

        assert.equal(30, settingsBill.getCriticalLevel())
        assert.equal(10, settingsBill.getWarningLevel())

    })

})
describe("use values", function(){
    it("should be able to use the call cost set ",function(){
        var settingsBill = BillWithSettings();
        
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(0.50);
        

        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();


        assert.equal(7, settingsBill.getTotalCost());
        assert.equal(7, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    })

    it("should be able to use the call cost set for 2 calls at 1.35 each ",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.75);
        settingsBill.setCriticalLevel(10)

        
        settingsBill.makeCall();
        settingsBill.makeCall();
       


        assert.equal(2.7, settingsBill.getTotalCost());
        assert.equal(2.7, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
    })
    it("should be able to send 2 sms's for 0.56 each ",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.56);
        settingsBill.setCriticalLevel(10)

        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(1.12, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.12, settingsBill.getTotalSmsCost());
    })

    it("should be able to send 2 sms's for 0.56 each and make 1 call at 1.50",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.50);
        settingsBill.setSmsCost(0.56);
        settingsBill.setCriticalLevel(10)


        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();

        assert.equal(2.62, settingsBill.getTotalCost());
        assert.equal(1.50, settingsBill.getTotalCallCost());
        assert.equal(1.12, settingsBill.getTotalSmsCost());
    })
})

describe("critical and warning level", function(){
    it("should return a class name of 'warning' if warning level is reached ",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.50);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10)
      

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();


        assert.equal("warning", settingsBill.totalClassName());
       
        
    })
    it("should return a class name of 'critical' if critical level is reached ",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.75);
        settingsBill.setSmsCost(0.50);
        settingsBill.setWarningLevel(10);
  

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();


        assert.equal("danger", settingsBill.totalClassName());
        
    })

    it("should stop the Total Call cost from increasing when the critical level has been reached",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.setCriticalLevel(10)
  

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
       
      

        assert.equal(10, settingsBill.getTotalCost());
        assert.equal("danger", settingsBill.totalClassName());
        
    })

    it("should allow the total to increase after reaching the critical level and then upping the critical level",function(){
        var settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.50);
        settingsBill.setWarningLevel(8);
        settingsBill.setCriticalLevel(10);
  

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
       

        assert.equal(10, settingsBill.getTotalCost());
        assert.equal("danger", settingsBill.totalClassName());

        settingsBill.setCriticalLevel(20);
        assert.equal("warning", settingsBill.totalClassName());

        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(15, settingsBill.getTotalCost());
        
    })
})
})