/*set up bank function*/
function getInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;

}
function getUpdateValue(inputTotal, amount) {
    const updateValue = document.getElementById(inputTotal);
    const previousValueText = updateValue.innerText;
    const previousValue = parseFloat(previousValueText);
    updateValue.innerText = previousValue + amount;
}
function getUpdateBalance(){
    const balanceInput = document.getElementById('balance-input');
    const preBalanceText = balanceInput.innerText;
    const preBalance = parseFloat(preBalanceText);
    return preBalance
}

function updateBalance(amount, isAdd) {
    const balanceInput = document.getElementById('balance-input');
    // const preBalanceText = balanceInput.innerText;
    // const preBalance = parseFloat(preBalanceText);
    const preBalance = getUpdateBalance();
    if (isAdd == true) {
        balanceInput.innerText = preBalance + amount;

    }
    else {
        balanceInput.innerText = preBalance - amount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputField('deposit-input');
    if (depositAmount > 0){
        getUpdateValue('deposit-amount', depositAmount);
        updateBalance(depositAmount, true);
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputField('withdraw-input');
    const preBalanceAmount = getUpdateBalance();
    if (withdrawAmount > 0 && withdrawAmount < preBalanceAmount) {
        getUpdateValue('withdraw-amount', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})