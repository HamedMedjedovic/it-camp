// funkcija u js-u predstavlja blok koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem :
// 1. function keyword
// 2. arrow function sintakse.

// 1. function keyword :

// pravimo funkciju koja sabira broj 3 i broj 5:
function zbirTriIPet(){
    const zbir = 3 + 5
    return zbir;
}

// pravimo funkciju koja sabira dva broja:
function zbirDvaBroja(){

}


function zbirKvadrataDvaBroja(a1,a2){
    return a1*a1 + a2*a2
}
console.log(zbirKvadrataDvaBroja(5,6))



// Defaultne vrednosti se stavljaju na kraju.
// Ne moze neka defaultna vrednost biti definisana pre obavezne.


// Jos jedan nacin za deklarisanje funkcije preko function keyword:
const aritmetickaVrednost = function(par1 =1,par2=1,par3=1){
    return (par1 + par2 + par3)/ 3;
}
console.log(aritmetickaVrednost(2,5,5))



function povrsina(par1=1,par2=1){
    if (par1===par2){
        console.log("kvadrat")
    }else{
        console.log("pravougaonik")
    }return par1*par2
}
console.log(povrsina(5,6))




