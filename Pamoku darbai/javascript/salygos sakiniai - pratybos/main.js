// 1. Parašykite salyginį sakinį, kuris priklausomai nuo lyties parašytų komplimentą
// 2. Parašykite salyginį sakinį, kuris priklausomai nuo oro salygų 
// ('cloudy', 'sunny', 'rainy', 'windy', 'chilly') parašytų žmogaus pastebėjimą į konsolę
// 3. Parašykitę salyginį sakinį, jog jeigu nelyja ir gera nuotaika atspusdintų jūsų sugalvotą tekstą 'then' bloke,
// priešingu atveju tegu spausdina jūsų sugalvotą tekstą 'else' bloke
// 4. Parašykite salyginių sakinių bloką, kuris pagal mėnesio dieną parašytų ar yra mėnesio pradžia, vidurys ar pabaiga
// 5. Parašykite išlepusio vaiko ( AND salygų darinį &&) ėjimo į kiemą pavyzdį. 
// 6. Parašykite neišlepusio vaiko (OR salygų darinį ||) sutikimo valgyti pavyzdį. 

// ----------------------------------------Kompleksinė užduotis------------------------------------------------
// Parašykite 3 vyrų ir 3 moterų objektus su savybėmis ir kriterijais pažinčių portalui. 
// Parašykite logiką pagal kurią bus matuojamas suderinamumas.

// 1.
console.log('1. Parašykite salyginį sakinį, kuris priklausomai nuo lyties parašytų komplimentą');
let isMale = prompt('Ar jūs esate vyras? (y/n)');
if (isMale == 'y' || isMale == 'Y' || isMale == 'Yes' || isMale == 'yes') {
  console.log('Džiaugiuosi tave matydamas');
} else if (isMale == 'n' || isMale == 'N' || isMale == 'No' || isMale == 'no') {
  console.log('Šiandien gražiai atrodai');
} else {
  console.error('ERROR: Atsakymą įvedėte neteisingu formatu.');
}
console.log('');

// 2.
console.log('2. Parašykite salyginį sakinį, kuris priklausomai nuo oro salygų išspausintų jūsų pastebėjimą.');
let weather = prompt("Įrašykite vieną iš oro salygų: 'cloudy', 'sunny', 'rainy', 'windy', 'chilly'");
switch (weather) {
  case 'cloudy': console.log('Puiki diena pasivaikščioti.'); break;
  case 'sunny': console.log('Būtų jėga nulėkt prie jūros.'); break;
  case 'rainy': console.log('Puiki diena serialui.'); break;
  case 'windy': console.log('Kaip gerai kad turiu neperpučiamą striukę.'); break;
  case 'chilly': console.log('Pagaliau panaudosiu mamos megztą šaliką.'); break;
  default:
    console.error('ERROR: Blogai įvedėte oro salygas.');
    weather = 'error'; // pažymiu, jog buvo įvesta klaida oro salygų įvedime.
}
console.log('');

// 3. 
console.log("Parašykitę salyginį sakinį, jog jeigu nelyja ir gera nuotaika atspausdintų"
  + " jūsų sugalvotą tekstą 'then' bloke, priešingu atveju tegu spausdina jūsų sugalvotą tekstą 'else' bloke");

let goodMood = confirm('Ar jūs esate geros nuotaikos?');

if (weather != 'error') {
  if (goodMood && weather != 'rainy') {
    console.log('Skėčio šiandien neprireiks!');
  } else {
    console.log('Puiki diena serialui :)');
  }
} else {
  console.error('ERROR: Blogai įvedėte oro salygas.');
}

// 4. 
console.log('4. Parašykite salyginių sakinių bloką, kuris pagal mėnesio dieną parašytų ar yra mėnesio pradžia, vidurys ar pabaiga');
let today = new Date();
let monthDay = today.getDate();
if (monthDay < 10) {
  console.log('Mėnesio pradžia');
} else if (monthDay < 20) {
  console.log('Mėnesio vidurys');
} else {
  console.log('Mėnesio pabaiga');

}
console.log('');

// 5.
console.log('5. Parašykite išlepusio vaiko ( AND salygų darinį &&) ėjimo į kiemą pavyzdį. ')
let ballExists = true;
let friendCount = 5;
let childMood = 'good';

if (ballExists && weather == 'sunny' && friendCount >= 4 && friendCount <= 6 && childMood == 'good') {
  console.log('Nu gerai... išeisiu jei jau taip reikia.');
} else {
  console.log('Deja negaliu, mama liepė susitvarkyt kambarį.');
}
console.log('');

// 6. 
console.log('6. Parašykite neišlepusio vaiko (OR salygų darinį ||) sutikimo valgyti pavyzdį');
let soup = null;
let mainDish = null;
let desert = 'Braškės';
let drink = null;
if (soup || mainDish || desert || drink) { // Jeigu egsituoja bet koks maistas, bus TRUE (neišrankus vaikas valgys)
  console.log('Nuostabu valgysiu viską. Ačiū :)');
} else {
  console.log('Labai noriu valgyti, gailą kad nieko neturi');
}

