// 4. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'.

const monthlySalary = 5000;
const annualBonus = 10000;
const monthlyOnlineCourses = 15000;

const annualIncome = (monthlySalary * 12) + annualBonus + (monthlyOnlineCourses * 12);

console.log(annualIncome); // 250000