const incomeForm = document.getElementById("income-form")
const incomeInput = document.getElementById("income-description");
const incomeAmountInput = document.getElementById("income-amount");

const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
const transactionList = document.getElementById("transaction-history");

const totalExpense = document.getElementById("total-expenses");
const totalIncome = document.getElementById("total-income");
const balance = document.getElementById("balance");


incomeForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const description = incomeInput.value.trim()
    const amount = parseFloat(incomeAmountInput.value.trim())
    const category = "---"
    const type = "Income"

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid income description and amount.');
        return;
    }
    addTransaction(description,amount,category,type)
    updateSummary()
    clearInputs()
})

expenseForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    const category = categoryInput.value;
    const type = "Expense"
    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.');
        return;
    }
    
    addTransaction(description,amount,category,type)
    updateSummary()
    clearInputs()
})

function addTransaction(description,amount,category,type) {
    const transactionRow = document.createElement("tr")

    transactionRow.innerHTML = `
    <td>${description}</td>
    <td>${category}</td>
    <td>${amount.toFixed(2)}</td>
    <td>${type}</td>
    <td><button class="delete-btn">Delete</button></td>
    `
    transactionList.appendChild(transactionRow)

    transactionRow.querySelector('.delete-btn').addEventListener('click', function() {
        transactionRow.remove();
        updateSummary();
    });
}

function updateSummary() {
    let tExpenses = 0
    let tIncome = 0

    const transactions = transactionList.querySelectorAll("tr")

    transactions.forEach((transaction)=>{
        const amount = parseFloat(transaction.children[2].textContent)
        const type = transaction.children[3].textContent

        if (type === "Income") {
            tIncome += amount
        } else {
            tExpenses += amount
        }
        
    })

    totalExpense.textContent = tExpenses.toFixed(2)
    totalIncome.textContent = tIncome.toFixed(2)
    balance.textContent = (tIncome - tExpenses).toFixed(2)

}

function clearInputs() {
    expenseInput.value = '';
    expenseAmountInput.value = '';
    categoryInput.value = "Housing"
}