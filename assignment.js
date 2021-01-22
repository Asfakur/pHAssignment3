//solution 1
function kilometerToMeter(kiloMeters) {
    if(kiloMeters < 0){
        console.log("Length can't be negative");
    }
    else{
        return kiloMeters * 1000;
    }
    
}

//solution 2
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    
    if(watchQuantity < 0 || phoneQuantity < 0 || laptopQuantity < 0) {
        console.log("Please enter the positive number of quantity");
        return;
    }

    //calculating the cost
    var watchCost = watchQuantity * 50;
    var phoneCost = phoneQuantity * 100;
    var laptopCost = laptopQuantity * 500;

    return watchCost + phoneCost + laptopCost;
}

//solution 3

function hotelCost(spentDays) {

    var firstCost = 0;
    var secondCost = 0
 
    if(spentDays > 20) { 
        firstCost = 100 * 10;   //first 10 days bill
        secondCost = 80 * 10;   //second 10 days bill
        var thirdCost = (spentDays - 20) * 50; //third step as 80$ per a day

        return firstCost + secondCost + thirdCost;
    }
    else if(spentDays >= 11){
        firstCost = 100 * 10;
        secondCost = (spentDays - 10) * 80;

        return firstCost + secondCost;
    }
    else if(spentDays > 0 && spentDays <= 10) {
        return spentDays * 100;
    }
    else{
        console.log("Please insert the valid number of date");
        return;
    }
}

//solution 4

function megaFriend(arrayOfName){
    
    //check the input is string or not

    if (typeof arrayOfName != 'string'){
        console.log("Please insert String");
        return;
    }

    //check whether the input string is empty or not

    if(arrayOfName === ""){
        console.log("Sorry! Your input is empty.");
        return;
    }

    //here starts the real calculation

    var maxLength = 0;
    var maxWord = "";
    var tempName = "";

    for(var i = 0; i <arrayOfName.length; i++){
        if(arrayOfName.charAt(i) != " ") {
            tempName = tempName.concat(arrayOfName.charAt(i)); //keeps record temporary word for test which is big
            
            if(maxLength < tempName.length){ //test which is bigger word
                maxLength = tempName.length;  
                maxWord = tempName;                
            }
        }
        if(arrayOfName[i] == " ") {
            tempName = "";
        }

    }
    return maxWord;
}

