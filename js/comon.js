function getTextElemetnValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneString);
    return currentPhoneTotal;
}

function setElementValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElemetnValueById('phone-price');
    const currentCaseTotal = getTextElemetnValueById('case-price');
    
    /*const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    const subtotalElement = document.getElementById('sub-total');*/
    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total', currentSubtotal);

    const textAmountString = (currentSubtotal * 0.10).toFixed(2);
    const textAmount = parseFloat(textAmountString);
    setElementValueById('tax-amount', textAmount);

    const finalTotal = currentSubtotal + textAmount;
    setElementValueById('final-total', finalTotal);
}
