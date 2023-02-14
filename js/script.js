// phone -------------------------------------------
function updatePhoneNumber(isIncrease){
    const phoneNumberElement = document.getElementById('phone-number');
    const phoneString = phoneNumberElement.value;
    const previousPhone = parseInt(phoneString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhone + 1;
    }else{
        newPhoneNumber = previousPhone - 1;
    }
    phoneNumberElement.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phonePriceElement = document.getElementById('phone-price');
    phonePriceElement.innerText = phoneTotalPrice;
}
/*
function getTextElemetnValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneString);
    return currentPhoneTotal;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElemetnValueById('phone-price');
    const currentCaseTotal = getTextElemetnValueById('case-price');
    
    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    const subtotalElement = document.getElementById('sub-total');
    subtotalElement.innerText = currentSubtotal;
}
*/
document.getElementById('phon-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    /*const phoneTotalPrice = newPhoneNumber * 1219;
    const phonePriceElement = document.getElementById('phone-price');
    phonePriceElement.innerText = phoneTotalPrice;*/

    /*const phoneTotalElement = document.getElementById('phone-price');
    const currentPhoneString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneString);*/
    /*const currentPhoneTotal = getTextElemetnValueById('phone-price');
    const currentCaseTotal = getTextElemetnValueById('case-price');

    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    const subtotalElement = document.getElementById('sub-total');
    subtotalElement.innerText = currentSubtotal;*/
})

document.getElementById('phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})

// casing -----------------------------------------
function caseUpdate(isIncrease){
    const caseNumberFiled = document.getElementById('input-case');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const casePriceElement = document.getElementById('case-price');
    const caseNumberTotal = casePriceElement.innerTex
    casePriceElement.innerText = caseTotalPrice;
}

document.getElementById('plus-case').addEventListener('click', function(){
    const newCaseNumber = caseUpdate(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    /*const caseTotalPrice = newCaseNumber * 59;
    const casePriceElement = document.getElementById('case-price');
    const caseNumberTotal = casePriceElement.innerTex
    casePriceElement.innerText = caseTotalPrice;*/
})

document.getElementById('minus-case').addEventListener('click', function(){
    const newCaseNumber = caseUpdate(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    /*const caseTotalPrice = newCaseNumber * 59;
    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = caseTotalPrice;*/

})

