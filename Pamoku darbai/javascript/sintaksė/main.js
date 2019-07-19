// Gale kiekvienos komandos(instrukcijos) rašome kabliataškį, pvz.:
console.log(7);
console.log('Bet koks tekstas');
let a = 75;
//    Paprasti skliaustai - brackets () yra naudojami pramaterams įrašyti. Net jei parametrų nėra,
// jie reikalingi funkcijos iškvietimui:
alert('7');
alert(7);
console.log('Labas vėl');
console.log(); // Gausime tuščią eilutę

// Garbanioti skliaustai - curly brackets {} yra naudojami vykdymo blokams ir objekto savybėms apglėbti (sukurti mažesnę aplinką):
function add(a, b) {
  console.log(a + b);
}

if (5 > 10) {
  // Daryk kažką jeigu salyga tiesa
} else {
  // Priešingu atveju daryk kas tarp šitų skliaustų
}

let student = {
  name: 'Albert',
  surname: 'Petrovich',
  course: '2'
};

// Laužtiniai skliaustai - square brackets [] yra naudojami masyvams aprašyti ir jų (bei objektų) savybėms pasiekti:
let numbers = [1, 5, 9, 8, 7, 8, 7];
console.log(number[2]); // atspausdinti trečią masyvo elementą indeksu 2
number[3] = 77; // ketvirtam masyvo elementui, indeksu 3 priskirti reikšmę 77
console.log(student['name']); // atspausdinti kintamojo 'student' reikšmėje esančio objekto savybę 'name'
student['surname'] = 'Yvanobich'; // pakeisti kintamojo 'student' reikšmėje esančio objekto savybę 'surname'