//Muuttujia
var form = document.getElementById("form");
var auto1nopeus = document.getElementById("auto1").value;
var auto2nopeus = document.getElementById("auto2").value;
var matka = document.getElementById("Matka").value;
var kulutus = 0;
var total = 0;
var tunnit = 0;
var minuutit = 0;
var kulutus2 = 0;
var total2 = 0;
var tunnit2 = 0;
var minuutit2 = 0;
var autoVaihtoehto = "";
autoVaihtoehto = document.getElementById("autoValinta").value;
//test
var kulutusEro = 0;

//Laskuri ensimmäisen auton nopeudelle sekä ajalle
form.addEventListener("submit", function laskuri1(event) {
	event.preventDefault() 

	const kasvuKerroin = 1.009;
	form = document.getElementById("form");
	matka = document.getElementById("Matka").value;

	//Vaihtoehto1 muuttujat
	auto1nopeus = document.getElementById("auto1").value;
	kulutus = 0;
	nopeus = 0;
	total = 0;
	tunnit = 0;
	//Vaihtoehto2 muuttujat
	kulutus2 = 0;
	nopeus2 = 0;
	total2 = 0;
	tunnit2 = 0;
	auto2nopeus = document.getElementById("auto2").value;
	
	autoVaihtoehto = document.getElementById("autoValinta").value;
if(auto1nopeus > 0 && auto2nopeus > 0) {
	if(autoVaihtoehto === "A") {
		kulutus = 3;
		//Vaihtoehto1 laskut
		for(var i = 0; i < auto1nopeus; i++) {
			kulutus *= kasvuKerroin;
		}
		total = (matka/100) * kulutus;
		
		var y = matka / auto1nopeus;
		var x = y * 60;
		tunnit = Math.floor(x/60);
		minuutit = x % 60;
		//Vaihtoehto2 laskut
		//kulutus lasku
		kulutus2 = 3;
		for(var k = 0; k < auto2nopeus; k++) {
			kulutus2 *= kasvuKerroin;
		}
		total2 = (matka/100) * kulutus2;
		//aika
		var j = matka / auto2nopeus;
		var l = j * 60;
		tunnit2 = Math.floor(l/60);
		minuutit2 = l % 60;
		//kulutuksen ero
		var teksti1;
		kulutusEro = 0;
		if(total > total2) {
			kulutusEro = total - total2;
			teksti1 = "Vaihtoehto 2 kuluttaa ";
		} else if(total2 > total) {
			kulutusEro = total2 - total;
			teksti1 = "Vaihtoehto 1 kuluttaa ";
		} else {
			kulutusEro = 0;
		} 
		//ajan erotus
		var aikaEroMinuuteissa = 0;
		var aikaTeksti;
		var tuntiEro;
		var minuuttiEro;
		if(x > l){
			aikaEroMinuuteissa = x - l;
			tuntiEro = Math.floor(aikaEroMinuuteissa/60);
			minuuttiEro = aikaEroMinuuteissa % 60;
			aikaTeksti = "Vaihtoehto 2 on ";
		} else if(l > x) {
			aikaEroMinuuteissa = l - x;
			tuntiEro = Math.floor(aikaEroMinuuteissa/60);
			minuuttiEro = aikaEroMinuuteissa % 60;
			aikaTeksti = "Vaihtoehto 1 on ";
		}


		return document.getElementById("vastaus").innerHTML = "Vaihtoehto 1 kulutus on: " 
		+ Math.round(total*100)/100 + " litraa. Aika: " + tunnit + " tuntia ja " 
		+ Math.round(minuutit) + " minuuttia.<br> Vaihtoehto 2 kulutus on: " 
		+ Math.round(total2*100)/100 + " litraa. Aika: " + tunnit2 + " tuntia ja " 
		+ Math.round(minuutit2) + " minuuttia. <br> " + teksti1 + " "
		+ Math.round(kulutusEro*100)/100 + " litraa vähemmän."
		+ "<br> " + aikaTeksti + " " + tuntiEro + " tuntia ja " 
		+ Math.round(minuuttiEro) + " minuuttia nopeampi"
		
	} else if(autoVaihtoehto === "B") {
		kulutus = 3.5;
		//Vaihtoehto1 laskut
		for(var i = 0; i < auto1nopeus; i++) {
			kulutus *= kasvuKerroin;
		}
		total = (matka/100) * kulutus;
		
		var y = matka / auto1nopeus;
		var x = y * 60;
		tunnit = Math.floor(x/60);
		minuutit = x % 60;

		//Vaihtoehto2 laskut
		kulutus2 = 3.5;
		for(var k = 0; k < auto2nopeus; k++) {
			kulutus2 *= kasvuKerroin;
		}
		total2 = (matka/100) * kulutus2;
		
		var j = matka / auto2nopeus;
		var l = j * 60;
		tunnit2 = Math.floor(l/60);
		minuutit2 = l % 60;

		kulutusEro = 0;
		if(total > total2) {
			kulutusEro = total - total2;
			teksti1 = "Vaihtoehto 2 kuluttaa ";
		} else if(total2 > total) {
			kulutusEro = total2 - total;
			teksti1 = "Vaihtoehto 1 kuluttaa ";
		} else {
			kulutusEro = 0;
		}
		//ajan erotus
		var aikaEroMinuuteissa = 0;
		var aikaTeksti;
		var tuntiEro;
		var minuuttiEro;
		if(x > l){
			aikaEroMinuuteissa = x - l;
			tuntiEro = Math.floor(aikaEroMinuuteissa/60);
			minuuttiEro = aikaEroMinuuteissa % 60;
			aikaTeksti = "Vaihtoehto 2 on ";
		} else if(l > x) {
			aikaEroMinuuteissa = l - x;
			tuntiEro = Math.floor(aikaEroMinuuteissa/60);
			minuuttiEro = aikaEroMinuuteissa % 60;
			aikaTeksti = "Vaihtoehto 1 on ";
		}

		return document.getElementById("vastaus").innerHTML = "Vaihtoehto 1 kulutus on: " 
		+ Math.round(total*100)/100 + " litraa. Aika: " + tunnit + " tuntia ja " 
		+ Math.round(minuutit) + " minuuttia.<br> Vaihtoehto 2 kulutus on: " 
		+ Math.round(total2*100)/100 + " litraa. Aika: " + tunnit2 + " tuntia ja " 
		+ Math.round(minuutit2) + " minuuttia. <br> " + teksti1 + " "
		+ Math.round(kulutusEro*100)/100 + " litraa vähemmän."
		+ "<br> " + aikaTeksti + " " + tuntiEro + " tuntia ja " 
		+ Math.round(minuuttiEro) + " minuuttia nopeampi"
		
	} else {
		kulutus = 4;
		//Vaihtoehto1 laskut
		for(var i = 0; i < auto1nopeus; i++) {
			kulutus *= kasvuKerroin;
		}
		total = (matka/100) * kulutus;
		
		var y = matka / auto1nopeus;
		var x = y * 60;
		tunnit = Math.floor(x/60);
		minuutit = x % 60;
		//Vaihtoehto2 laskut

		kulutus2 = 4;
		for(var k = 0; k < auto2nopeus; k++) {
			kulutus2 *= kasvuKerroin;
		}
		total2 = (matka/100) * kulutus2;
		
		var j = matka / auto2nopeus;
		var l = j * 60;
		tunnit2 = Math.floor(l/60);
		minuutit2 = l % 60;

		kulutusEro = 0;
		if(total > total2) {
			kulutusEro = total - total2;
			teksti1 = "Vaihtoehto 2 kuluttaa ";
		} else if(total2 > total) {
			kulutusEro = total2 - total;
			teksti1 = "Vaihtoehto 1 kuluttaa ";
		} else {
			kulutusEro = 0;
		}

		//ajan erotus
		var aikaEroMinuuteissa = 0;
		var aikaTeksti;
		var tuntiEro;
		var minuuttiEro;
		if(x > l){
			aikaEroMinuuteissa = x - l;
			tuntiEro = Math.floor(aikaEroMinuuteissa/60);
			minuuttiEro = aikaEroMinuuteissa % 60;
			aikaTeksti = "Vaihtoehto 2 on ";
		} else if(l > x) {
			aikaEroMinuuteissa = l - x;
			tuntiEro = Math.floor(aikaEroMinuuteissa/60);
			minuuttiEro = aikaEroMinuuteissa % 60;
			aikaTeksti = "Vaihtoehto 1 on ";
		}


		return document.getElementById("vastaus").innerHTML = "Vaihtoehto 1 kulutus on: " 
		+ Math.round(total*100)/100 + " litraa. Aika: " + tunnit + " tuntia ja " 
		+ Math.round(minuutit) + " minuuttia.<br> Vaihtoehto 2 kulutus on: " 
		+ Math.round(total2*100)/100 + " litraa. Aika: " + tunnit2 + " tuntia ja " 
		+ Math.round(minuutit2) + " minuuttia. <br> " + teksti1 + " "
		+ Math.round(kulutusEro*100)/100 + " litraa vähemmän."
		+ "<br> " + aikaTeksti + " " + tuntiEro + " tuntia ja " 
		+ Math.round(minuuttiEro) + " minuuttia nopeampi"
	}
} else {
	return document.getElementById("vastaus").innerHTML = "Nopeutesi ei voi olla alle 0!"
}
}) //Laskuri päättyy
