function updateproductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    // update total
    const productTotal = document.getElementById(product + '-total');
    // const totalAmount = totalBalance.innerText;
    productTotal.innerText = productNumber * price;

    // calculate total
    caculateTotal();

};

// caculate total
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function caculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    // update on the html
    document.getElementById('sub-total').innerText = subTotal,
        document.getElementById('tax-total').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
};


// phone increase and decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, false);
})


// handle case increase and decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateproductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateproductNumber('case', 59, false);

});