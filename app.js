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

};
// phone increase and decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateproductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateproductNumber('phone', 1219, false);
})


// handle case increase and decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateproductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateproductNumber('case', 59, false);

});