function updateCase(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let casenumber = caseInput.value;
    if (isIncreasing == true) {
        casenumber = parseInt(casenumber) + 1;
    }
    else if (casenumber > 0) {
        casenumber = parseInt(casenumber) - 1;
    }

    caseInput.value = casenumber;

    // update case total
    const totalBalance = document.getElementById('case-total');
    const totalAmount = totalBalance.innerText;
    totalBalance.innerText = parseInt(totalAmount) * casenumber;

};

document.getElementById('case-plus').addEventListener('click', function () {
    updateCase(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCase(false);

});