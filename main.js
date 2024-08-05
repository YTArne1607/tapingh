var nachname = document.getElementById("tb-nachname");
var vorname = document.getElementById("tb-vorname");
var strasse = document.getElementById("tb-straße");
var plz = document.getElementById("tb-plz");
var ort = document.getElementById("tb-ort");
var datum1 = document.getElementById("datum1");
var betrag1 = document.getElementById("betrag1");
var datum2 = document.getElementById("datum2");
var betrag2 = document.getElementById("betrag2");
var datum3 = document.getElementById("datum3");
var betrag3 = document.getElementById("betrag3");
var datum4 = document.getElementById("datum4");
var betrag4 = document.getElementById("betrag4");
var datum5 = document.getElementById("datum5");
var betrag5 = document.getElementById("betrag5");
var datum6 = document.getElementById("datum6");
var betrag6 = document.getElementById("betrag6");
/*function btn() {
    localStorage.setItem("nachname", document.getElementById("tb-nachname").innerHTML);
}*/


const btn1 = document.getElementById("btn-download");
    btn1.addEventListener("click", function() {
        const element = document.getElementById("alles");
        const options = {
            
            filename: "RechnungNr" + localStorage.clickcount + ".pdf", // Dateiname anpassen
            image: { type: "jpeg", quality: 1.0 },
            html2canvas: { scale: 4,  },
            hotfixes: ["px_scaling"],
            jsPDF: { unit: "mm", format: "a4", orientation: "l" }
        };
        html2pdf().from(element).set(options).save();
    });


function btn() {

    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }

      document.getElementById("nr").innerHTML = localStorage.clickcount;
    

    //document.getElementById("main").style.display="none";
    //document.getElementById("blatt").style.display="block";
    if (nachname.value == "") {
        alert("Es sind nicht alle Felder ausgefüllt!");
    } else if (vorname.value == "") {
        alert("Es sind nicht alle Felder ausgefüllt!");
    } else if (strasse.value == "") {
        alert("Es sind nicht alle Felder ausgefüllt!");
    } else if (plz.value == "") {
        alert("Es sind nicht alle Felder ausgefüllt!");
    } else if (ort.value == "") {
        alert("Es sind nicht alle Felder ausgefüllt!");
    } else {
        document.getElementById("main").style.display="none";
        document.getElementById("blatt").style.display="block";
        document.querySelector(".datum-con").style.visibility="visible";
        document.querySelector(".betrag-con").style.visibility="visible";
        document.querySelector(".grau-main").style.display="block";
        document.getElementById("btn-download").style.display="block";
        document.querySelector(".gesamt").style.visibility="visible";

        if (datum1.value != "") {
            document.querySelector(".datum-con").style.bottom="218px";
            document.querySelector(".betrag-con").style.bottom="218px";
            document.getElementById("dtm1").innerHTML = datum1.value;
            document.getElementById("btg1").innerHTML = betrag1.value + " €";
            document.getElementById("gesamt").innerHTML = parseInt(betrag1.value) + " €";
        }

        if (datum2.value != "") {
        document.querySelector(".grau1").style.display="block";
        document.querySelector(".datum-con").style.bottom="218px";
        document.querySelector(".betrag-con").style.bottom="218px";
        document.getElementById("dtm2").innerHTML = datum2.value;
        document.getElementById("btg2").innerHTML = betrag2.value + " €";
        document.getElementById("gesamt").innerHTML = parseInt(betrag1.value) + parseInt(betrag2.value) + " €";
        }

        if (datum3.value != "") {
            document.querySelector(".datum-con").style.bottom="218px";
            document.querySelector(".betrag-con").style.bottom="218px";
            document.getElementById("dtm3").innerHTML = datum3.value;
            document.getElementById("btg3").innerHTML = betrag3.value + " €";
            document.getElementById("gesamt").innerHTML = parseInt(betrag1.value) + parseInt(betrag2.value) + parseInt(betrag3.value) + " €";
        }
        
        if (datum4.value != "") {
        document.querySelector(".grau2").style.display="block";
        document.querySelector(".datum-con").style.bottom="218px";
        document.querySelector(".betrag-con").style.bottom="218px";
        document.getElementById("dtm4").innerHTML = datum4.value;
        document.getElementById("btg4").innerHTML = betrag4.value + " €";
        document.getElementById("gesamt").innerHTML = parseInt(betrag1.value) + parseInt(betrag2.value) + parseInt(betrag3.value) + parseInt(betrag4.value) + " €";
        }

        if (datum5.value != "") {
            document.querySelector(".datum-con").style.bottom="218px";
            document.querySelector(".betrag-con").style.bottom="218px";
            document.getElementById("dtm5").innerHTML = datum5.value;
            document.getElementById("btg5").innerHTML = betrag5.value + " €";
            document.getElementById("gesamt").innerHTML = parseInt(betrag1.value) + parseInt(betrag2.value) + parseInt(betrag3.value) + parseInt(betrag4.value) + parseInt(betrag5.value) + " €";
        }
        
        if (datum6.value != "") {
        document.querySelector(".grau3").style.display="block";
        document.querySelector(".datum-con").style.bottom="200px";
        document.querySelector(".betrag-con").style.bottom="200px";
        document.getElementById("dtm6").innerHTML = datum6.value;
        document.getElementById("btg6").innerHTML = betrag6.value + " €";
        document.getElementById("gesamt").innerHTML = parseInt(betrag1.value) + parseInt(betrag2.value) + parseInt(betrag3.value) + parseInt(betrag4.value) + parseInt(betrag5.value) + parseInt(betrag6.value) + " €";
        }

    }

    document.getElementById("name-erg").innerHTML = nachname.value + ", " + vorname.value;
    document.getElementById("straße-erg").innerHTML = strasse.value;
    document.getElementById("plz-ort-erg").innerHTML = plz.value + " " + ort.value;


    /*document.getElementById("dtm1").innerHTML = datum1.value;
    document.getElementById("btg1").innerHTML = betrag1.value += " €";
    
    document.getElementById("dtm2").innerHTML = datum2.value;
    document.getElementById("btg2").innerHTML = betrag2.value += " €";

    document.getElementById("dtm3").innerHTML = datum3.value;
    document.getElementById("btg3").innerHTML = betrag3.value += " €";

    document.getElementById("dtm4").innerHTML = datum4.value;
    document.getElementById("btg4").innerHTML = betrag4.value += " €";

    document.getElementById("dtm5").innerHTML = datum5.value;
    document.getElementById("btg5").innerHTML = betrag5.value += " €";

    document.getElementById("dtm6").innerHTML = datum6.value;
    document.getElementById("btg6").innerHTML = betrag6.value += " €";*/



    /*var a = parseInt(betrag1.value);
    var b = parseInt(betrag2.value);
    var c = parseInt(betrag3.value);
    var d = parseInt(betrag4.value);
    var e = parseInt(betrag5.value);
    var f = parseInt(betrag6.value);*/

}

    /*document.getElementById("dtm-btg-btn").addEventListener("click", function(){ 
        document.getElementById("datum1").innerHTML = "Datum: " + datum.value + " " + "Betrag: " + betrag.value + " € ";
        document.getElementById("datum1").style.visibility="visible";
        document.getElementById("btn-label1").style.visibility="visible";
    });*/


        