/* 15. Cree un formato de hora legible por humanos usando el objeto Date.

    I. YYYY-MM-DD HH:mm
    II. DD-MM-YYYY HH:mm
    III. DD/MM/YYYY HH:mm

*/

/* 15. Cree un formato de hora legible por humanos usando el objeto Date.

I. YYYY-MM-DD HH:mm
II. DD-MM-YYYY HH:mm
III. DD/MM/YYYY HH:mm
*/

const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

// I. YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hours}:${minutes}`);

// II. DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`);

// III. DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`);


