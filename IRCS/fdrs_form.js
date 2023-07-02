function calculateTotalIncome() {
    // Use querySelectorAll to select all input elements with the class "income"
    const incomeInputs = document.querySelectorAll(".income");

    let totalIncome = 0;

    // Loop through each input and add its value to the totalIncome
    incomeInputs.forEach(function(input) {
        const inputValue = parseFloat(input.value);
        if (!isNaN(inputValue)) {
            totalIncome += inputValue;
        }
    });

    // Set the total income value to the output field
    const outputField = document.getElementById("Income-Total Income");
    outputField.value = totalIncome.toFixed(0);
}

// Add event listeners to trigger the calculation whenever the input fields change
window.addEventListener('DOMContentLoaded', function() {
    const incomeInputs = document.querySelectorAll(".income");
    incomeInputs.forEach(function(input) {
        input.addEventListener('input', calculateTotalIncome);
    });
});

function calculateTotalStaff() {
    // Use querySelectorAll to select all input elements with the class "income"
    const totStaff = document.querySelectorAll(".staff");

    let totalStaff = 0;

    // Loop through each input and add its value to the totalIncome
    totStaff.forEach(function(input) {
        const inputValue = parseFloat(input.value);
        if (!isNaN(inputValue)) {
            totalStaff += inputValue;
        }
    });

    // Set the total income value to the output field
    const outputField = document.getElementById("total-staff");
    outputField.value = totalStaff.toFixed(0);
}

// Add event listeners to trigger the calculation whenever the input fields change
window.addEventListener('DOMContentLoaded', function() {
    const totStaff = document.querySelectorAll(".staff");
    totStaff.forEach(function(input) {
        input.addEventListener('input', calculateTotalStaff);
    });
});

function inctoggleHelpText() {
    const helpText = document.getElementById("inchelpText");
    helpText.classList.toggle("show");
}

function exptoggleHelpText() {
    const helpText = document.getElementById("exphelpText");
    helpText.classList.toggle("show");
}

function peopletoggleHelpText() {
    const helpText = document.getElementById("peoplehelpText");
    helpText.classList.toggle("show");
}

function stafftoggleHelpText() {
    const helpText = document.getElementById("staffhelpText");
    helpText.classList.toggle("show");
}

function firstaidtoggleHelpText() {
    const helpText = document.getElementById("firstaidhelpText");
    helpText.classList.toggle("show");
}

function programmetoggleHelpText(containerId, marginValue1, marginValue2) {
    const helpText = document.getElementById("programmehelpText");
    helpText.classList.toggle("show");
    var container = document.getElementById(containerId);
    if (container) {
        var currentMarginTop = container.style.marginTop;

        if (currentMarginTop === marginValue1) {
            container.style.marginTop = marginValue2;
        } else {
            container.style.marginTop = marginValue1;
        }
    }
}

function thematictoggleHelpText() {
    const helpText = document.getElementById("thematichelpText");
    helpText.classList.toggle("show");
}