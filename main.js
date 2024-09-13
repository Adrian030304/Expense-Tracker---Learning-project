const incomeInput = document.getElementById("income-description");
const incomeAmountInput = document.getElementById("income-amount");
const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const categoryInput = document.getElementById("expense-category");
//const transactionList = document.getElementById("transaction-list");
const totalExpense = document.getElementById("total-expenses");
const totalIncome = document.getElementById("total-income");
const balance = document.getElementById("balance");


expenseForm.addEventListener("submit",(event)=>{
    event.preventDefault();

    const description = expenseInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense description and amount.');
        return;
    }



    event.target.submit()
})