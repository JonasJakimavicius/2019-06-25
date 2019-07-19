// Kintamajam prilyginant primityvaus tipo kintamajį, kuriama reikšmės kopija.
let num = 7;
let numCopy = num;
num = 9;
console.log({ num, numCopy });

//    Kintamajam prilyginant nuorodos tipo kintamajį, kuriama nuoroda į tą pačią atminties vietą.
//    Ko pasekoje, pakeitus kintamojo(objekto) savybes naudojant viena iš nuorodų, kita nuoroda pasiekiamos 
// (tos pačios patys) kintamojo(objekto) savybės, irgi pasikeis.
let refVar = {
  name: 'initialName',
  age: 10
};
let refVarCopy = refVar;
refVar.name = 'changedName';
refVarCopy.age = 999;
console.log({ refVar, refVarCopy });

// Norint pasikopijuoti visas nuorodos kintamojo(objekto) reikšmes galima naudoti tokius būdus:
// 1. Prieš kopijuojant pakeisti kopijuojamą kintamąjį į stringą ir vėl atgal į objektą.
console.log(JSON.stringify(refVar));

let refVarTrueCopy = JSON.parse(JSON.stringify(refVar));
refVar.name = "changerAgain";
console.log({ refVar, refVarTrueCopy });
// 2. Naudonat tokį metodą.
let refVarTrueCopy2 = Object.assign({}, refVar)