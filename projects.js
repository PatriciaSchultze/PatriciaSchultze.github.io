//slideshow ///////////////////////////////////////////////////////////////////

function addingFullscreen(){

   
            
    if(document.fullscreenElement){ 
       document.exitFullscreen() 
    } else { 
      event.target.requestFullscreen();
    } 
 
}


//lists of the classes 
var aktuellerIndexBig = 0;



//Mansion
const bulletsMansionContent = document.getElementsByClassName("MansionContentBullet");
const slidesMansionContent = document.getElementsByClassName("MansionContent");
let indexMansionContent = aktuellerIndexBig;

const bulletsMansionLearn = document.getElementsByClassName("MansionLearnBullet");
const slidesMansionLearn = document.getElementsByClassName("MansionLearn");
let indexMansionLearn = aktuellerIndexBig;


//HopsyFlopsy
const bulletsContentHF = document.getElementsByClassName("HFContentBullet");
const slidesContentHF = document.getElementsByClassName("HFContent");
let indexContentHF = aktuellerIndexBig;

const bulletsLearnHF = document.getElementsByClassName("HFLearnBullet");
const slidesLearnHF = document.getElementsByClassName("HFLearn");
let indexLearnHF = aktuellerIndexBig;


//DuoDash
const bulletsContentDuo = document.getElementsByClassName("DuoContentBullet");
const slidesContentDuo = document.getElementsByClassName("DuoContent");
let indexContentDuo = aktuellerIndexBig;

const bulletsLearnDuo = document.getElementsByClassName("DuoLearnBullet");
const slidesLearnDuo = document.getElementsByClassName("DuoLearn");
let indexLearnDuo = aktuellerIndexBig;



//Pension
const bulletsContentPension = document.getElementsByClassName("PensionContentBullet");
const slidesContentPension = document.getElementsByClassName("PensionContent");
let indexContentPension = aktuellerIndexBig;

const bulletsLearnPension = document.getElementsByClassName("PensionLearnBullet");
const slidesLearnPension = document.getElementsByClassName("PensionLearn");
let indexLearnPension = aktuellerIndexBig;


//Portfolio 
const bulletsContentPortfolio = document.getElementsByClassName("PortfolioContentBullet");
const slidesContentPortfolio = document.getElementsByClassName("PortfolioContent");
let indexContentPortfolio = aktuellerIndexBig;

const bulletsLearnPortfolio = document.getElementsByClassName("PortfolioLearnBullet");
const slidesLearnPortfolio = document.getElementsByClassName("PortfolioLearn");
let indexLearnPortfolio = aktuellerIndexBig;


//CarrotCutter
const bulletsContentCutter = document.getElementsByClassName("CutterContentBullet");
const slidesContentCutter = document.getElementsByClassName("CutterContent");
let indexContentCutter = aktuellerIndexBig;

const bulletsLearnCutter = document.getElementsByClassName("CutterLearnBullet");
const slidesLearnCutter = document.getElementsByClassName("CutterLearn");
let indexLearnCutter = aktuellerIndexBig;


//Tunnels
const bulletsContentTunnels = document.getElementsByClassName("TunnelsContentBullet");
const slidesContentTunnels = document.getElementsByClassName("TunnelsContent");
let indexContentTunnels = aktuellerIndexBig;

const bulletsLearnTunnels = document.getElementsByClassName("TunnelsLearnBullet");
const slidesLearnTunnels = document.getElementsByClassName("TunnelsLearn");
let indexLearnTunnels = aktuellerIndexBig;

//Stories
const bulletsContentStories = document.getElementsByClassName("StoriesContentBullet");
const slidesContentStories = document.getElementsByClassName("StoriesContent");
let indexContentStories = aktuellerIndexBig;

const bulletsLearnStories = document.getElementsByClassName("StoriesLearnBullet");
const slidesLearnStories = document.getElementsByClassName("StoriesLearn");
let indexLearnStories = aktuellerIndexBig;


//FireWater
const bulletsContentFireWater = document.getElementsByClassName("FireWaterContentBullet");
const slidesContentFireWater = document.getElementsByClassName("FireWaterContent");
let indexContentFireWater = aktuellerIndexBig;

const bulletsLearnFireWater = document.getElementsByClassName("FireWaterLearnBullet");
const slidesLearnFireWater = document.getElementsByClassName("FireWaterLearn");
let indexLearnFireWater = aktuellerIndexBig;


//First
const bulletsContentFirst = document.getElementsByClassName("FirstContentBullet");
const slidesContentFirst = document.getElementsByClassName("FirstContent");
let indexContentFirst = aktuellerIndexBig;

const bulletsLearnFirst = document.getElementsByClassName("FirstLearnBullet");
const slidesLearnFirst = document.getElementsByClassName("FirstLearn");
let indexLearnFirst = aktuellerIndexBig;



//1. slide beim aufrufen der website
//mansion
bulletsMansionLearn[aktuellerIndexBig].classList.add("activeBullet"); //füge dem ersten bullet beim start die klasse aktiv hinzu, sodass dieser bullet dunkler als die anderen ist
slidesMansionLearn[aktuellerIndexBig].classList.add("activeSlide");  //macht die erste slide sichtbar

bulletsMansionContent[aktuellerIndexBig].classList.add("activeBullet"); 
slidesMansionContent[aktuellerIndexBig].classList.add("activeSlide");  

//hopsy
bulletsLearnHF[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnHF[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentHF[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentHF[aktuellerIndexBig].classList.add("activeSlide");  

//duo
bulletsLearnDuo[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnDuo[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentDuo[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentDuo[aktuellerIndexBig].classList.add("activeSlide");  

//pension
bulletsLearnPension[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnPension[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentPension[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentPension[aktuellerIndexBig].classList.add("activeSlide");  

//portfolio
bulletsLearnPortfolio[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnPortfolio[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentPortfolio[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentPortfolio[aktuellerIndexBig].classList.add("activeSlide");  

//cutter
bulletsLearnCutter[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnCutter[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentCutter[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentCutter[aktuellerIndexBig].classList.add("activeSlide");  

//tunnels
bulletsLearnTunnels[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnTunnels[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentTunnels[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentTunnels[aktuellerIndexBig].classList.add("activeSlide");  

//stories
bulletsLearnStories[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnStories[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentStories[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentStories[aktuellerIndexBig].classList.add("activeSlide");  

//FireWater
bulletsLearnFireWater[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnFireWater[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentFireWater[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentFireWater[aktuellerIndexBig].classList.add("activeSlide");  

//First
bulletsLearnFirst[aktuellerIndexBig].classList.add("activeBullet");
slidesLearnFirst[aktuellerIndexBig].classList.add("activeSlide"); 

bulletsContentFirst[aktuellerIndexBig].classList.add("activeBullet"); 
slidesContentFirst[aktuellerIndexBig].classList.add("activeSlide");  





function umschalten(anzahl, welcheSlide) { //anzahl = anzahl bzw richtung der slid zu der geschaltet werden soll
    var aktuellerIndex = WhichSlidesIndex(welcheSlide);
    var slides = WhichSlidesIMG(welcheSlide);
    
    var neuerIndex = aktuellerIndex + anzahl;

    if(neuerIndex < 0) {  //wenn anfang oder ende des arrays erreicht ist, dann soll es an das ende bzw den anfang
        neuerIndex = slides.length -1;
    }

    else if(neuerIndex > slides.length -1) {
        neuerIndex = 0;
    }
    
    springeZuEintrag(neuerIndex, welcheSlide);
}



function springeZuEintrag(neuerIndex, welcheSlide) {
    let bullets = WhichSlidesBullet(welcheSlide);
    let slides = WhichSlidesIMG(welcheSlide);
    let aktuellerIndex = WhichSlidesIndex(welcheSlide);


    slides[aktuellerIndex].classList.remove("activeSlide");
    bullets[aktuellerIndex].classList.remove("activeBullet");
    slides[aktuellerIndex].removeEventListener("click", addingFullscreen);

    bullets[neuerIndex].classList.add("activeBullet");
    slides[neuerIndex].classList.add("activeSlide");
    slides[aktuellerIndex].addEventListener("click", addingFullscreen);

    aktuellerIndex = neuerIndex;
    WhichSlidesIndexSave(welcheSlide, aktuellerIndex);
    
}


function WhichSlidesIMG(welcheSlide){
    switch (welcheSlide){
        case 11:
            return slidesMansionContent;
        break;
        case 12:
            return slidesMansionLearn ;
        break;
        case 21:
            return slidesContentHF;
        break;
        case 22:
            return slidesLearnHF;
        break;
        case 31:
            return slidesContentDuo;
        break;
        case 32:
            return slidesLearnDuo;
        break;
        case 41:
            return slidesContentPension;
        break;
        case 42:
            return slidesLearnPension;
        break;
        case 51:
            return slidesContentPortfolio;
        break;
        case 52:
            return slidesLearnPortfolio;
        break;
        case 61:
            return slidesContentCutter;
        break;
        case 62:
            return slidesLearnCutter;
        break;
        case 71:
            return slidesContentTunnels;
        break;
        case 72:
            return slidesLearnTunnels;
        break;
        case 81:
            return slidesContentStories;
        break;
        case 82:
            return slidesLearnStories;
        break;
        case 91:
            return slidesContentFireWater;
        break;
        case 92:
            return slidesLearnFireWater;
        break;
        case 101:
            return slidesContentFirst;
        break;
        case 102:
            return slidesLearnFirst;
        break;
            
    }
}

function WhichSlidesBullet(welcheSlide){
    switch (welcheSlide){
        case 11:
            return bulletsMansionContent;
        break;
        case 12:
            return bulletsMansionLearn;
        break;
        case 21:
            return bulletsContentHF;
        break;
        case 22:
            return bulletsLearnHF;
        break;
        case 31:
            return bulletsContentDuo;
        break;
        case 32:
            return bulletsLearnDuo;
        break;
        case 41:
            return bulletsContentPension;
        break;
        case 42:
            return bulletsLearnPension;
        break;
        case 51:
            return bulletsContentPortfolio;
        break;
        case 52:
            return bulletsLearnPortfolio;
        break;
        case 61:
            return bulletsContentCutter;
        break;
        case 62:
            return bulletsLearnCutter;
        break;
        case 71:
            return bulletsContentTunnels;
        break;
        case 72:
            return bulletsLearnTunnels;
        break;
        case 81:
            return bulletsContentStories;
        break;
        case 82:
            return bulletsLearnStories;
        break;
        case 91:
            return bulletsContentFireWater;
        break;
        case 92:
            return bulletsLearnFireWater;
        break;
        case 101:
            return bulletsContentFirst;
        break;
        case 102:
            return bulletsLearnFirst;
        break;
            
    }
}

function WhichSlidesIndex(welcheSlide){
    switch (welcheSlide){
        case 11:
            return indexMansionContent;
        break;
        case 12:
            return indexMansionLearn ;
        break;
        case 21:
            return indexContentHF;
        break;
        case 22:
            return indexLearnHF;
        break;
        case 31:
            return indexContentDuo;
        break;
        case 32:
            return indexLearnDuo;
        break;
        case 41:
            return indexContentPension;
        break;
        case 42:
            return indexLearnPension;
        break;
        case 51:
            return indexContentPortfolio;
        break;
        case 52:
            return indexLearnPortfolio;
        break;
        case 61:
            return indexContentCutter;
        break;
        case 62:
            return indexLearnCutter;
        break;
        case 71:
            return indexContentTunnels;
        break;
        case 72:
            return indexLearnTunnels;
        break;
        case 81:
            return indexContentStories;
        break;
        case 82:
            return indexLearnStories;
        break;
        case 91:
            return indexContentFireWater;
        break;
        case 92:
            return indexLearnFireWater;
        break;
        case 101:
            return indexContentFirst;
        break;
        case 102:
            return indexLearnFirst;
        break;
            
    }
}

function WhichSlidesIndexSave(welcheSlide, neuerIndexSaving){
    switch (welcheSlide){
        case 11:
            indexMansionContent = neuerIndexSaving;
        break;
        case 12:
            indexMansionLearn =neuerIndexSaving;
        break;
        case 21:
            indexContentHF =neuerIndexSaving;
        break;
        case 22:
            indexLearnHF =neuerIndexSaving;
        break;
        case 31:
            indexContentDuo =neuerIndexSaving;
        break;
        case 32:
            indexLearnDuo =neuerIndexSaving;
        break;
        case 41:
            indexContentPension =neuerIndexSaving;
        break;
        case 42:
            indexLearnPension =neuerIndexSaving;
        break;
        case 51:
            indexContentPortfolio =neuerIndexSaving;
        break;
        case 52:
            indexLearnPortfolio =neuerIndexSaving;
        break;
        case 61:
            indexContentCutter =neuerIndexSaving;
        break;
        case 62:
            indexLearnCutter =neuerIndexSaving;
        break;
        case 71:
            indexContentTunnels =neuerIndexSaving;
        break;
        case 72:
            indexLearnTunnels =neuerIndexSaving;
        break;
        case 81:
            indexContentStories =neuerIndexSaving;
        break;
        case 82:
            indexLearnStories =neuerIndexSaving;
        break;
        case 91:
            indexContentFireWater =neuerIndexSaving;
        break;
        case 92:
            indexLearnFireWater =neuerIndexSaving;
        break;
        case 101:
            indexContentFirst =neuerIndexSaving;
        break;
        case 102:
            indexLearnFirst =neuerIndexSaving;
        break;
            
    }
}