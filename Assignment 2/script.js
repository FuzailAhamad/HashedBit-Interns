// Program 1: Even Numbers from 1 to 100
document.addEventListener("DOMContentLoaded", function() {
    let evenNumbers = [];
    for (let i = 2; i <= 100; i += 2) {
        evenNumbers.push(i);
    }
    document.getElementById("even-numbers").textContent = evenNumbers.join(', ');
});

// Program 2: Calculator Function
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('calc-result').textContent = `Result: ${result}`;
}

// Program 3: Tax Calculation Function
function findTax() {
    const salary = parseFloat(document.getElementById('salary').value);
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            tax = 'Invalid salary';
    }

    document.getElementById('tax-amount').textContent = `Tax Amount: ${tax}`;
}

// Program 4: Sum of Products of Corresponding Digits
function sumOfProducts() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    n1 = n1.split('').reverse();
    n2 = n2.split('').reverse();

    let maxLength = Math.max(n1.length, n2.length);
    let result = 0;

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(n1[i] || 0, 10);
        let digit2 = parseInt(n2[i] || 0, 10);
        result += digit1 * digit2;
    }

    document.getElementById('sum-result').textContent = `Sum of Products: ${result}`;
}