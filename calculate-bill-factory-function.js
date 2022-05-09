
function BillWithSettings(){

    var theCallCost = 0;
    var theSmsCost = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    var theWarningLevel = 0;

    function getCallCost(){
        return theCallCost
    }
    function setCallCost(callCost){
        return theCallCost = callCost
    }
    function getSmsCost(){
        return theSmsCost
    }
    function setSmsCost(smsCost){
        return theSmsCost = smsCost

    }
    function makeCall(){
        callCostTotal += theCallCost
    }
    function getTotalCost(){
        return callCostTotal + smsCostTotal
    }
    function getTotalCallCost(){
        return callCostTotal
    }
    function getTotalSmsCost(){
        return smsCostTotal

    }
   
    function sendSms(){
         return smsCostTotal += theSmsCost
    }
    function setWarningLevel(warningLevel){
        return theWarningLevel = warningLevel
    }
    function getWarningLevel(){
        return
    }
    function totalClassName(){
        return
    }
    
        return{
            setCallCost,
            getCallCost,
            getSmsCost,
            makeCall,
            getTotalCost,
            getTotalCallCost,
            getTotalSmsCost,
            setSmsCost,
            sendSms,
            setWarningLevel,
            totalClassName,
            getWarningLevel
        } 
    }

