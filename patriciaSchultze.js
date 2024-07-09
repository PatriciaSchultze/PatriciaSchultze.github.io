// //slideshow ///////////////////////////////////////////////////////////////////
const textLink = document.getElementById("aProjectTitle");
textLink.addEventListener("click", toProjectSite);

//arrays der klassen
const bullets = document.getElementsByClassName("liBullet");
const slides = document.getElementsByClassName("imgSlide");
const arrowLeft = document.getElementsByClassName("pfeil-links");
const arrowRight = document.getElementsByClassName("pfeil-rechts");

const slideshow = document.getElementById("slideshow");
const ProjectTitle = document.getElementById("aProjectTitle");
const ProjectText = document.getElementById("pProjectsSubText");


var aktuellerIndex = 1;
var letztesKlicken = new Date();

//1. slide beim aufrufen der website
bullets[aktuellerIndex].classList.add("active"); //füge dem ersten bullet beim start die klasse aktiv hinzu, sodass dieser bullet dunkler als die anderen ist
slides[aktuellerIndex].classList.add("middle");  //macht die erste slide sichtbar
slides[aktuellerIndex-1].classList.add("left");  //macht die erste slide sichtbar
slides[aktuellerIndex+1].classList.add("right");  //macht die erste slide sichtbar

 slides[aktuellerIndex].addEventListener("click", toProjectSite);
slides[aktuellerIndex-1].addEventListener("click", HelperLeft);
slides[aktuellerIndex+1].addEventListener("click", HelperRight);

function umschalten(anzahl) { //anzahl = anzahl bzw richtung der slide zu der geschaltet werden soll
    var neuerIndex = aktuellerIndex + anzahl;

    if(neuerIndex < 0) {  //wenn anfang oder ende des arrays erreicht ist, dann soll es an das ende bzw den anfang
       return;
    }

    else if(neuerIndex > slides.length -1) {
       return;
    }

    springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {

    bullets[aktuellerIndex].classList.remove("active");
    slides[aktuellerIndex].classList.remove("middle");
    slides[aktuellerIndex].removeEventListener("click", toProjectSite);
    if(aktuellerIndex-1>-1){ slides[aktuellerIndex-1].classList.remove("left"); slides[aktuellerIndex-1].removeEventListener("click", HelperLeft); }
    else {slideshow.classList.remove("endLeft"); arrowLeft[0].classList.remove("pfeilEnd");arrowLeft[0].classList.add("pfeil"); }
    if(aktuellerIndex+1<slides.length) {slides[aktuellerIndex+1].classList.remove("right"); slides[aktuellerIndex+1].removeEventListener("click", HelperRight);}
    else {slideshow.classList.remove("endRight"); arrowRight[0].classList.remove("pfeilEnd");arrowRight[0].classList.add("pfeil");}


    bullets[neuerIndex].classList.add("active");
    slides[neuerIndex].classList.add("middle");
    slides[neuerIndex].addEventListener("click", toProjectSite);
    if(neuerIndex-1>-1) {slides[neuerIndex-1].classList.add("left"); slides[neuerIndex-1].addEventListener("click", HelperLeft);}
    else {slideshow.classList.add("endLeft"); arrowLeft[0].classList.add("pfeilEnd"); arrowLeft[0].classList.remove("pfeil"); }
    if(neuerIndex+1<slides.length) {slides[neuerIndex+1].classList.add("right"); slides[neuerIndex+1].addEventListener("click", HelperRight);}
    else {slideshow.classList.add("endRight"); arrowRight[0].classList.add("pfeilEnd");arrowRight[0].classList.remove("pfeil");}

    aktuellerIndex = neuerIndex;

    switch (neuerIndex){
      case 0: 
        textLink.dataset.url="projects.html#secMansion";
        ProjectTitle.textContent = "Mansion of Time";
        ProjectText.innerHTML = "This is my second game of a big group project, we were 6 people working over 6 months on it. <br>In this you are trapped in a time loop in the 1920s on Halloween. You have to solve several puzzles and explore an old mansion to be able to get back into your time.";
        break;
        case 1: 
        textLink.dataset.url="projects.html#secHopsie";
        ProjectTitle.textContent = "Hopsy Flopsiy";
        ProjectText.innerHTML = "This was my first game in a big group project. It is a mobile game, where you are a fish, wanting to reach the ocean, having to cross an entire city. One reference game was 'Crossy Roads'. <br>It is made in Unity and I was mainly responsible for the UI and saving system.";
        break;
        case 2: 
        textLink.dataset.url="projects.html#secDuoDash";
        ProjectTitle.textContent = "Duo Dash";
        ProjectText.innerHTML = "This is a group project of 8 people. <br>We are still working on it and expect it to be finished in September 2024. <br>So, right now what I can already show is some work in progress.";
        break;
        case 3: 
        textLink.dataset.url="projects.html#secPension";
        ProjectTitle.textContent = "Pension Schultze Website";
        ProjectText.innerHTML = "This is my very first website and with that also the first time I worked with HTML, CSS and JS. <br>I did it as a start for my mom's website. She has a bed and breakfast and someday I want to program the whole website for her.";
        break;
        case 4: 
        textLink.dataset.url="projects.html#secPortfolio";
        ProjectTitle.textContent = "My Portfolio Website";
        ProjectText.innerHTML = "This is this very webiste, which I programmed to apply for the internship in Ocotber 2024. I choose to build this website so I can show my work in an ordered way. <br>I never expecpted it to take THIS much work. I am very glad and proud to finally be able to present it to you now.";
        break;
        case 5: 
        textLink.dataset.url="projects.html#secCutter";
        ProjectTitle.textContent = "Carrot Cutter Roboter";
        ProjectText.innerHTML = "In a group of 4 we built an roboter which is able to cut fruits and vegetables into pieces with the same volume. <br>For this we used the programs Arduino, to control the motors, and Processing, to read and work with the input of the camera, giving the calcutlated results then over to the arduino program. ";
        break;
        case 6: 
        textLink.dataset.url="projects.html#secTunnels";
        ProjectTitle.textContent = "The Tunnels";
        ProjectText.innerHTML = "This was a project which I did for two different classes in my year abroad in Canada. One was Creative Writing and the other one Animation. <br>In Animation I did for this a storyboard and began to model the tunnels (my first models ever), in Creative Writing I wrote the whole story as an urban exploration story.";
        break;
        case 7: 
        // textLink.dataset.url="projects.html#secStories";
        // ProjectTitle.textContent = "Short Stories and Concepts";
        // ProjectText.innerHTML = "Those I wrote when I was in Canada, mostly for my creative witing class and for narrative design. <br>They are each very different, of different topics, themes and length. ";
        // break;
        case 7: 
        textLink.dataset.url="projects.html#secFireWater";
        ProjectTitle.textContent = "Fire and Water";
        ProjectText.innerHTML = "For my programming exam last semester (winter semester 2023) I programmed this within one and a half days. <br>It is a 2D jum n run and I was amazed how fast this went to create this level, after working for so long on the 'Mansion of Time project'.";
        break;
        case 8: 
        textLink.dataset.url="projects.html#secFirstUnreal";
        ProjectTitle.textContent = "First Unreal Game";
        ProjectText.innerHTML = "This was my very fist game built in an engine. <br>In it you have to collect 5 coins to win. For each coin you have to overcome a little puzzle.";
        break;

      default: console.log("out of range slide");
    }

}

function HelperRight()
{
 umschalten(1)
}

function HelperLeft()
{
 umschalten(-1)
}

function toProjectSite(event)
{
  location.href = event.target.dataset.url;
}

// let children = document.querySelectorAll(
//     "#slideshow > img"
//   );
//   children.forEach((element) =>
//     element.addEventListener("click", (e) => {
//       const clickedElement = e.target;  
//       if (clickedElement.classList.contains("middle")) {
//         location.href = clickedElement.dataset.url;
//       }
//       children.forEach((img) => {
//         img.classList.remove("middle");
//         img.classList.remove("left");
//         img.classList.remove("right");
//       });

      
   
//       clickedElement.classList.add("middle");
//       clickedElement.previousElementSibling?.classList.add("left");
//       clickedElement.nextElementSibling?.classList.add("right");


//       // Copied from https://stackoverflow.com/questions/8801787/get-index-of-clicked-element-using-pure-javascript
//       // To get the index of the clicked element.
//       const clickedIndex = Array.from(
//         clickedElement.parentElement.children
//       ).indexOf(clickedElement);

//       bullets[aktuellerIndex].classList.remove("active");
//       aktuellerIndex = clickedIndex;
//       bullets[aktuellerIndex].classList.add("active");



//       // galleryContainer.style.transform = `translateX(${
//       //   -clickedImageWidth * clickedIndex +
//       //   documentCenterX -
//       //   clickedImageWidth / 2
//       // }px)`;
//     })
//   );







// function automaticNextSlide() {
//     const vergangeneZeit = new Date() - letztesKlicken;

//     if(vergangeneZeit >= 4000) umschalten(1);

// }

//setInterval(umschalten, 4000, 1); //umschalten ohne klammern hinten, damit die intervall funktion nicht einen rückgabe wert der umschalt funktion erwartet und damit arbeitet, sondern mit der funktion selbst
        //funktion die aufgerufen wird, ms nach denen die funktion aufgerufen wird, wert der an die umschalt-funktion übergeben wird

//setInterval(automaticNextSlide,500);