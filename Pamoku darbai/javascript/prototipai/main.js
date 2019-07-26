// Prototipas - tai šablonas kompleksiniams (sudėtingiem, bendra logika pasižymintiems) objektams

function createCar(brand, model, year, color) {
  return {
    brand,
    model,
    year,
    color
  }
}

let car1 = createCar('BMW', '320d', 1999, '#000000');
let car2 = createCar('Audi', 'A6', 2002, '#990000');

let cars = [car1, car2];

console.table(cars);

// Naujos sintaksės prototipo kūrimas
class Person { // Klasė tai duomenų struktūra, šablonas kompleksiniui obejktui
  constructor(name, surname, age) { // įeinamieji paramtrai kuriant objektą: newPeople('Jonas', 'Arnasauskas', 12)
    this.name = name;         // paduota reikšmė prisegama prie objekto savybės
    this.surname = surname;   // paduota reikšmė prisegama prie objekto savybės
    this.age = age;           // paduota reikšmė prisegama prie objekto savybės
    this.mood = 'normal';     // statinė reikšmė prisegama prie objekto savybės
  }

  // Metodai tai yra vidinės funkcijos, kviečiamos PER OBJEKTĄ. 
  //  THIS YRA TAI, KAS IŠKVIETĖ METODĄ (dažniausiai tos pačios klasės objektas)
  getMood() {
    return "I'm feeling " + this.mood; // iškvietus šį metodą, grąžinamas suformuotas stringas, su objekto (per kurį iškviestas metodas) savybe 'mood
  };

  sayName = function () { // Analogiškas metodo aprašymas
    console.log('Hello, my name is ' + this.name + ' ' + this.surname);
  }

  sayHelloTo = function (anotherPerson) { // Metodas kuris ima parametrą ir kreipiasi į kito objekto savybes. Spausdina informaciją
    console.log('Hello, ' + anotherPerson.name + ' ' + anotherPerson.surname + ', my name is ' + this.name + ' ' + this.surname);
  }

  kiss(anotherPerson) { 
    anotherPerson.mood = 'Good'; // Keičiama šio objekto savybė
  }

  kissWith(anotherPerson) {
    anotherPerson.mood = 'Good'; // Per parametrus paduoto objekto savybė
    this.mood = 'Good'; // Keičiama šio(this) objekto savybė
  }
}

const people = [
  new Person('Vilius', 'Staugaitis', 33),
  new Person('Kepalas', 'Bambynas', 32),
  new Person('Toras', 'Storas', 31)
]

let newPerson = new Person('Čigonas', 'Slėpkarklius', 19);
people.push(newPerson);
console.log(people);
people.forEach(p => p.sayName()); // Visi pasisveikina

// Kiekvienas pasisveikina su kitais
people.forEach(p => {
  people.forEach(pTo => {
    if (p != pTo) p.sayHelloTo(pTo);
  });
});

console.log('Moods before kiss()');
console.log(people[0].getMood() + ' | ' + people[1].getMood());
people[0].kiss(people[1]);
console.log('Moods after kiss()');
console.log(people[0].getMood() + ' -> ' + people[1].getMood());

console.log('Moods before kissWith()');
console.log(people[2].getMood() + ' | ' + people[3].getMood());
people[2].kissWith(people[3]);
console.log('Moods after kissWith()');
console.log(people[2].getMood() + ' <-> ' + people[3].getMood());


// 1. Sukurkite lifto klasę su savybėmis:
//     minFloor
//     maxFloor
//     currFloor
//     goingUp
//     goingDown
//     area
//     maxWeight
//     currHeight
//     speed
//     doorOpen
//     speed
//     floorHeight
// 2. Sukurkite metodą kuris atidatyrų duris
// 3. Sukurkite metodą kuris uždarytų duris
// 4. Sukurkite metodą kuris keliautų į aukšą x
// 5. Uždėkite apribojimą, kad durys atsidarinėtų liftui esant konkrečiam aukšte
// 6. Uždėkite apribojimą, jog duris atidarinėtų tik tada, jeigu liftas nejuda


