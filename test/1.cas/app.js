document.getElementById("paragraf").innerHTML = "Ovo je paragraf koji je unet naknadno"
paragraf = document.getElementById("paragraf")
paragraf.style.backgroundColor = "purple";

console.log("Ovo je nas prvi ispis u konzoli")

// TIPOVI PODATAKA U JS //


// Za proveru tipa neke promanljive (varijable) se koristi typeof operator. //


// PRIMITIVNI TIPOVI PODATAKA //


// 1.String- Predstavljaju niz karaktera koji je zapisan unutar navodnika (obicnih ili duplih) //


console.log("ovo je neki string napisan unutrar duplih navodnika")
console.log(typeof"ovo je neki string napisan unutrar duplih navodnika")


// 2. number - predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza //
// Ne pravi se razlika izmedju celih realnih i kompleksnih brojeva //

console.log(14)
console.log(typeof 14)

console.log(typeof -5.67)

// 3. BigInt - se koristi za skladistenje brojeva cija granica prelazi granicu number tipa podatka //

console.log(BigInt(1234567654321))
console.log(typeof BigInt(1234567654321))

// 4. boolean - logicki entitet koji moze imati dve vrednosti:
// true
// false
// Najcesce se koristi u kondicionalima (if naredbe) i ima veliku primenu.

daLiPadaKisa = false;

console.log(true);
console.log(false);

console.log(daLiPadaKisa)

// 5. undefined - je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu ali joj nismo dodelili vrednost  
// U tom slucaju i vrednost i tip promenljive je undefiend

let prom1; // deklarisanje promenljive
prom1 = 54; // inicijalizacija (dodela vrednosti) promenljive


// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili ne korektnu vrednost.

skola = null
console.log(typeof sk)
console.log(typeof skola) // rezultat je objekt

// 7. symbol-Novi tip podataka u JavaScriptu koji se koristi za dodeljivanje jedistvene ili anonimne vrednosti

x =  Symbol("Danas je lepo vreme.")
console.log(x)
y =  Symbol("Danas je lepo vreme.")
console.log(y)

console.log(x === y) // razlikuju se

console.log(typeof x === y)

// primitivni tipovi podataka se koriste kada imamo promenljivu odnosno varijablu sa samo jednom vrednoscu.


// NEPRIMITIVNI TIPOVI PODATAKA //

// za promenljive(varijable) koje mogu skladistiti vise vrednosti, ili neke komleksne vrednosti se koriste ne primitivni tipovi podataka.

// Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u JavaScriptu dobijamo object za tip.

// 1. Nizovi (Arrays) - neprimitivni tip podatka koji sluzi za skladistenje vise vrednosti.
// U JavaScriptu niz moze sadrzati elemente razlicitog tipa.
niz1 = ["Mitar","Dzenan","Haris","Hamed","Nikola"]
console.log(niz1)

niz2 = ["Hamed", 15, false]
console.log(niz2)

// Jos jedan nacin definisanja niza:
niz3 = new Array("Mitar","Dzenan","Haris","Hamed","Nikola")
console.log(niz3)

// 2. objekti(object) - su glavni ne primitivni tip podatka u JavaScriptu.
// objekti se zapisuju po principu name:value pair (ime:vrednost par)

object1 = {
    ime:"Mehmed",
    prezime: "kucevic",
    godine: 15,
    skola: "Dva Heroja",
    punoletnost: false
}
console.log(object1.godine)

// 3. Setovi(sets) - slicni su nizovima sa razlikom da set ne moze da sadrzi duplikat

set1 = new Set(["Alen",'Hasan',"Miona","Amir","Alen"])
console.log(set1)

// 4. Mape (maps) - su slicni objektima sa nesto drugacijim nacinom definisanja.

map1 = new Map([
    ["jabuke", 50],
    ["kruske", 50],
    ["tresnje", 50],
])
console.log(map1)



