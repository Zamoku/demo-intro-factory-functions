
function BillWithSettings(){

    var theCallCost = 0;
    var theSmsCost = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    function getCallCost(){
        return theCallCost
    }
    function setCallCost(callCost){
        theCallCost = callCost
    }
    function getSmsCost(){
        return theSmsCost
    }
    function setSmsCost(smsCost){
         theSmsCost = smsCost

    }
    function makeCall(){
         if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost
         } 
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
        if(!hasReachedCriticalLevel()){
            return smsCostTotal += theSmsCost
        }
    }
    function setWarningLevel(warningLevel){
         theWarningLevel = warningLevel
    }
    function getWarningLevel(){
        return theWarningLevel
    }
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel
    }
    function getCriticalLevel(){
        return theCriticalLevel
    }
    function hasReachedCriticalLevel(){
        return getTotalCallCost() >= getCriticalLevel()
    }
    function totalClassName(){
        
        if(hasReachedCriticalLevel()){
            return "danger"
        }
        if(getTotalCallCost() >= getWarningLevel()){
            return "warning"
        }
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
            getWarningLevel,
            getCriticalLevel,
            setCriticalLevel,
            hasReachedCriticalLevel

        } 
    }

