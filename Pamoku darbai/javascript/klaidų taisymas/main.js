// Duotas kodo blokas
let a = 7; // 1
let c = 12; // 1
let res = 0; // 1
//  (    ↓      )  1
for (let i = a - c; i < c; i++) { // 17 * (1+1+1) = 51 
  //   kuomet i = 12  (    ↑    )  1
  res += 12;
}
//  1. Kiek komandų įvykdyta nuo 2 iki 7 eilutės galo? // 56
//  2. Kiek kartų įvyks ciklas? // 17
//  3. Kam bus lygu kintamasis 'res' po ciklo? // 17 * 12 = 204
//  4. Perrašykite alternatyvią logiką, su 'while' ciklu //
let a1 = 7;  // 1
let c1 = 12; // 1
let res1 = 0; // 1
let i1 = a1 - c1; // 1
while (i1 < c1) {  // 17 + 1
  res1 += 12; // 1 * 17
  i1++; // 1 * 17
}
//  5. Kas yra funkcija? Kaip ji naudojama? Parašykite pvz.


// Ištaisykite klaidas. kodas turi sujungti 2 masyvus užtrauktuko principu :
let array1 = [1, 2, 3, 5, 9, 8, 4, 2];
let array2 = [1, 2, 3, 4, 5];

function arrayZipper(array1, array2) { // funkcijos pavadinimas ir įeinamieji parametrai
  let commonLength; // bendras ilgis
  let longerArray;  // ilgesnio masyvo kopijos kintamasis
  let resultArray = []; // rezultatų masyvas
  if (array1.length < array2.length) { // tikrinama ar pirmu parametru paduotas masyvas trumpesnis
    commonLength = array1.length; // priskiriamas bendra ilgis
    longerArray = array2; // nustatomas ilgesnis masyvas
  } else {
    commonLength = array2.length; // priskiriamas bendra ilgis
    longerArray = array1; // nustatomas ilgesnis masyvas
  }
  for (let i = 0; i < commonLength; i++) { // sujungiami 2 masyvai kas antrą elementą, tol kol turi bendrą ilgį 
    resultArray.push(array1[i]); // įdedamas pirmo masyvo elementas į rezultatų masyvą
    resultArray.push(array2[i]); // įdedamas antro masyvo elementas į rezultatų masyvą
  }
  for (let i = commonLength; i < longerArray.length; i++) { // Įdedami ilgesnio masyvo elementai į rezultatų masyvą
    resultArray.push(longerArray[i]); // Į rezultatų masyvą įdedame einamają reikšmę
  }
  return resultArray; // grąžiname rezultatų masyvą, į funkcijos iškvietimo vietą
}

let arrayZipperResult = arrayZipper(array1, array2); // kviečiame funkciją ir jos išsaugome jos rezultatą
console.log(arrayZipperResult); // spausdiname rezultatą