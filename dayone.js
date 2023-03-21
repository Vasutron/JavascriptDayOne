const myName = 'Vsutron'
let heimgt = 175;
let isMale = false;
let city = null;
let bigNumber = 10n;


console.log(myName, heimgt, isMale, city, bigNumber);

//conditionals การเช็คเงื่อนไข

const age = 25;

if (age > 18 ){
    console.log('Age is more than 18');
} else {
    console.log('Age is less than 18');
}

let password = '';

if (password == ''){
    console.log('Password is required');
} else if (password.length >= 8 && password.length <= 12){
    console.log('Password is valid');
} else {
    console.log('Password is invalid');
}

//Function การสร้างฟังก์ชัน
function calculeteVat(money, vat){
    return money * vat /100;
} // คำสั่ง return จะทำให้ฟังก์ชันหยุดทำงานทันที

const totalVat = calculeteVat(100, 7); //เรียกใช้ Funtion calculeteVat 100 คือ money และ 7 คือ vat
console.log(totalVat); // 7

const totalVat10 = calculeteVat(100, 10);
console.log(totalVat10);

// Flow Control การควบคุมการทำงานของโปรแกรม หรือลูป

for(let counter = 0; counter < 10; counter++){
    if (counter == 5){
        break;
    }
    console.log(counter);
}

// DOM Manipulation การจัดการ DOM = Document Object Model