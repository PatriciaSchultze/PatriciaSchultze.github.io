//overflow
const Menu = document.getElementsByClassName("menu");
const headerLinks = document.getElementsByClassName("headerLinks");

function activateMenu(){
    if (document.body.clientWidth<759){

        Menu[0].classList.add("activeMenu");

        for (let step = 0; step < 6; step++) {
            headerLinks[step].classList.add("menu");
            console.log(step)
        }

    }
    if (document.body.clientWidth>759){
        Menu[0].classList.remove("activeMenu");
        for (let step = 0; step < 6; step++) {
            headerLinks[step].classList.remove("menu");
        }
        
    }
}
activateMenu()
addEventListener("resize", (event) => {activateMenu()});





//slideshow ///////////////////////////////////////////////////////////////////

//arrays der klassen
const bullets = document.getElementsByClassName("indikator");
const slides = document.getElementsByClassName("slide");

//1. slide beim aufrufen der website
bullets[0].classList.add("aktiv"); //füge dem ersten bullet beim start die klasse aktiv hinzu, sodass dieser bullet dunkler als die anderen ist
slides[0].classList.add("aktiv");  //macht die erste slide sichtbar


var aktuellerIndex = 0;
var letztesKlicken = new Date();


function umschalten(anzahl) { //anzahl = anzahl bzw richtung der slid zu der geschaltet werden soll
    var neuerIndex = aktuellerIndex + anzahl;

    if(neuerIndex < 0) {  //wenn anfang oder ende des arrays erreicht ist, dann soll es an das ende bzw den anfang
        neuerIndex = slides.length -1;
    }

    else if(neuerIndex > slides.length -1) {
        neuerIndex = 0;
    }

    springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {
    bullets[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    bullets[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
    letztesKlicken = new Date(); //new date ~ jetzt
}

function automaticNextSlide() {
    const vergangeneZeit = new Date() - letztesKlicken;

    if(vergangeneZeit >= 4000) umschalten(1);

}

//setInterval(umschalten, 4000, 1); //umschalten ohne klammern hinten, damit die intervall funktion nicht einen rückgabe wert der umschalt funktion erwartet und damit arbeitet, sondern mit der funktion selbst
        //funktion die aufgerufen wird, ms nach denen die funktion aufgerufen wird, wert der an die umschalt-funktion übergeben wird

setInterval(automaticNextSlide,500);