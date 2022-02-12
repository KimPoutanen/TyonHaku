var tietokone_voitot = 0
var pelaaja_voitot = 0
var tasapeli = 0
var rounds = 0 
var tietokone = 0;

var btn3 = document.getElementById("kiviButton");
var btn1 = document.getElementById("paperiButton");
var btn2 = document.getElementById("saksetButton");


function tietokoneValinta(){
    tietokoneLuku = Math.floor(Math.random() * 3)
    if(tietokoneLuku == 1){
		tietokone = "Paperi"
    }
	else if(tietokoneLuku == 2) {
		tietokone = "Sakset"
		 }
	else {
		tietokone = "Kivi"
		}
    return tietokone;
	
}


btn1.addEventListener("click", function kpsPaperi(event) {
	event.preventDefault() 
   var tiettari = tietokoneValinta();
   if (tiettari === "Paperi") {
       return document.getElementById("vastaus").innerHTML = "Tietokone valitsi myös paperin. Tasapeli!"
   } else if(tiettari === "Sakset") {
       return document.getElementById("vastaus").innerHTML = "Tietokone valitsi sakset. Hävisit pelin!"
   } else {
    return document.getElementById("vastaus").innerHTML = "Tietokone valitsi kiven. Voitit pelin!"
   }

});

btn2.addEventListener("click", function kpsSakset(event) {
	event.preventDefault() 
    
    var tiettari = tietokoneValinta();
   if (tiettari === "Paperi") {
       return document.getElementById("vastaus").innerHTML = "Tietokone valitsi paperin. Voitit pelin!"
   } else if(tiettari === "Sakset") {
    return document.getElementById("vastaus").innerHTML = "Tietokone valitsi sakset. Tasapeli!"
   } else {
    return document.getElementById("vastaus").innerHTML = "Tietokone valitsi kiven. Hävisit pelin!"
   }

});

btn3.addEventListener("click", function kpsKivi(event) {
	event.preventDefault() 
    
    var tiettari = tietokoneValinta();
   if (tiettari === "Paperi") {
       return document.getElementById("vastaus").innerHTML = "Tietokone valitsi paperin. Hävisit pelin!"
   } else if(tiettari === "Sakset") {
         return document.getElementById("vastaus").innerHTML = "Tietokone valitsi sakset. Voitit pelin!"
   } else {
    return document.getElementById("vastaus").innerHTML = "Tietokone valitsi kiven. Voitit pelin!"
   }
   

});