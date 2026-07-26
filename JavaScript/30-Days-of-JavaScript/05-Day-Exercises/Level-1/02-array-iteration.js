// 12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const companies = itCompanies.toString().split(",");

console.log(`${companies} , son grandes empresas de TI.`);

// 13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe.

let company = prompt("Ingrese un nombre de una empresa de TI: ").trim().toLowerCase();
let index = itCompanies.indexOf(company);

if(index === -1){
    console.log("La empresa no existe");
} else {
    console.log(`Si existe, ${itCompanies}`)
}

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter().

if (itCompanies[0].match(/o/g).length > 1) {
    console.log(itCompanies[0]);
}

if (itCompanies[1].match(/o/g).length > 1) {
    console.log(itCompanies[1]);
}

if (itCompanies[2].match(/o/g).length > 1) {
    console.log(itCompanies[2]);
}

// Apple no tiene "o"

if (itCompanies[5].match(/o/g).length > 1) {
    console.log(itCompanies[5]);
}

if (itCompanies[6].match(/o/g).length > 1) {
    console.log(itCompanies[6]);
}

