"use strict"

window.onload = init;

function init() {

    let calculateButton = document.querySelector("#calculateButton");

    calculateButton.addEventListener("click", mortgage);
}

function mortgage() {

    let principal = document.querySelector("#principal").value;
    let interestRate = document.querySelector("#interest").value;
    let loanLength = document.querySelector("#loanLength").value;


    let loanMonths = loanLength * 12;
    let interestRateMonthly = ((interestRate / 100) / 12);

    let monthlyPayment = principal * (interestRateMonthly * Math.pow(1 + interestRateMonthly, loanMonths) / (math.pow(1 + interestRateMonthly, loanMonths) - 1))
    let paymentTotal = monthlyPayment * loanMonths;
    let interestValue = paymentTotal - principal;

    monthlyPayment = monthlyPayment.toFixed(2);
    interestValue = interestValue.toFixed(2);

    let msgText = "Your monthly payment is " + monthlyPayment.toFixed(2) + " for " + loanLength + " years.Your total payment is " + paymentTotal.toFixed(2) + " and total interest is " + interestValue.toFixed(2);
    document.querySelector("#calculationResult").innerHTML = message

    document.querySelector("#answerField").value = msgText;
}
