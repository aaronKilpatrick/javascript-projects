const tipOutput = document.querySelector('#tip-amount');
const totalOutput = document.querySelector('#total');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const billValue = document.querySelector('#bill-amount').value;
    const tipPercent = document.querySelector('#percentage-tip').value;
    let tipAmount;

    if (!billValue || !tipPercent) {
        alert("Please enter valid amounts");
        return;
    }

    tipAmount = billValue * (tipPercent / 100);
    tipOutput.value = `$${tipAmount}`;
    totalOutput.value = `$${parseFloat(tipAmount) + parseFloat(billValue)}`;
});