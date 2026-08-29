// =====================================
// EXERCISES LEVEL 3
// =====================================

/* 1. Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción. */
console.log("========== Ejercicio 1 ==========");

const personAccount = {
  firstName: "John",
  lastName: "Doe",

  incomes: [
    { description: "Salary", amount: 5000 },
    { description: "Freelance", amount: 2000 },
  ],

  expenses: [
    { description: "Rent", amount: 1500 },
    { description: "Groceries", amount: 500 },
  ],

  totalIncome: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },

  totalExpense: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },

  accountInfo: function () {
    return `Account Info:
Name: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome()}
Total Expense: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}`;
  },

  addIncome: function (description, amount) {
    this.incomes.push({
      description: description,
      amount: amount,
    });
  },

  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountInfo());

personAccount.addIncome("Bonus", 1000);
personAccount.addExpense("Internet", 600);

console.log(personAccount.accountInfo());
