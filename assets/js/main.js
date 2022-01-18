let helloWorld = "Hello World";
const pi = 3.14;
let burjDubai = "828m";
let fullName = "Jan Schmidt";
let eifelTower = "324m";
const camelCase = "camelCase";
let kursStatus = true;

console.log("-------------- Aufgabe 1 -----------------------");
console.log(helloWorld + ", die Zahl Pi ist " + pi + ", der BurjDubai ist " + burjDubai + " hoch. Meine Name ist " + fullName + " und der Eifelturm hat eine Höhe von, " + eifelTower + ".");
console.log("Ich schreibe in " + camelCase + ", meine Kursstatus ist " + kursStatus + ".");
console.log("--------------- Ende Aufgabe 1 ------------------");

console.log("-------------- Aufgabe 2 -----------------------");
let a = 12;
let b = a * 3;

console.log(b);
document.write(b)

console.log(document.URL);

console.log("Hello world!");

console.log("Anton");

let name = "Anton";
console.log(name);

let age = 28;
console.log(age);

let job = "Trainer";
console.log(job);

let married = true;
console.log(married);

console.log(name + " ist " + age + " Jahre alt, von Beruf " + job + " und ist verheiratet: " + married);
console.log("--------------- Ende Aufgabe 2 ------------------");

console.log("-------------- Lev1_5 -----------------------");

let carName = "BMW";
console.log(carName);

// let x = 150;
// console.log(x);

// let y = 50;
// console.log(y);

// let z = x + y;
// console.log(z);

let firstName = "John";
let lastName = "Doe";
age = 35;

console.log("His Fullname is " + firstName + " " + lastName + ". He's Age is " + age);
console.log("--------------- Ende Lev1_5 ------------------");

console.log("-------------- Lev1_6 -----------------------");

var z = 34;
z = 67;
console.log(z);

let x = 34;
x = 67;
console.log(x);

const y = 34;
// y = 67;
console.log(y);

// Die y-Variable/Konstante kann nur 1x deklariert werden. Eine Nachträgliche Wertzuweisung wird mit einer Fehlermeldung quittiert.
console.log("--------------- Ende Lev1_6 ------------------");

console.log("-------------- Lev1_12 -----------------------");
let score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

score = (5 + 5) * 10;
console.log("Ergebnis: " + score);

score = 0;
score = score + 10;
console.log("Ergebnis: " + score);

score = 0;
score += 10;
console.log("Ergebnis: " + score);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("decrement: " + zahl);
console.log("--------------- Ende Lev1_12 ------------------");

console.log("-------------- Lev1_13 -----------------------");
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

let division_operator = 4 / 2;
console.log("division: " + division_operator);

let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);
console.log("--------------- Ende Lev1_13 ------------------");

console.log("-------------- Lev1_1-----------------------");
document.write("<h1>Hello world!</h1>" + "<p>Have a nice day</p>");

let myText = "Hello again";
document.write(myText + "<br>");

let namE, nachname
namE = "Frank"
nachname = "Hauser"
document.write("<br>Name: " + namE + "<br>Nachname: " + nachname);
console.log("--------------- Ende Lev1_1 ------------------");

console.log("-------------- Lev1_11-----------------------");
let x1 = "Hello", y1 = "World<br>", z1;
z1 = x1 + y1;
document.write("<br>" + z1);

let n = x1 + " " + y1;
document.write(n);

x1 += "Word;"
document.write(x1);

let meinString = "Ich bin erster";
console.log(meinString + " Ich komme auf Platz zwei");
console.log("-------------- Ende Lev1_11-----------------------");

console.log("-------------- Lev1_4-----------------------");
// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");

let alter = prompt("Gib mir bitte dein Alter:");
console.log(alter);

let b1 = 5;
let a1 = b1 * 5 - 3;
alert(a1);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);
console.log("-------------- Ende Lev1_4-----------------------");


let wetter = "Regen";
let himmel = "Wolken";
const lichtgeschwindigkeit = "~300.000 km/s"

// let allesZusammen = `Egal ob ${wetter} oder ${himmel}, die ${lichtgeschwindigkeit} fliegt mit`;

// document.write(allesZusammen);
console.log(`Egal ob ${wetter} oder ${himmel}, die ${lichtgeschwindigkeit} fliegt mit`);

