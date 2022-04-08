
var min = 1;
var max = 24;
 

window.addEventListener("load", function() {
    zufall();
})

function zufall(){
    let x = (Math.random() * (max - min)) + min;
    let y = Math.round(x)
    if (y==1){
        q="Mittwald bietet viele Arten von Hosting an."
        a=true
    }
    if (y==2){
        q="Im Kundencenter kann man keine Domain anlegen."
        a=false
    }
    if (y==3){
        q="Bash ist eine Skriptsprache"
        a=true
    }
    if (y==4){
        q="HTTP ist eine Programmiersprache"
        a=false
    }
    if (y==5){
        q="Es gibt viele Teams bei Mittwald"
        a=true
    }
    if (y==6){
        q="Mittwald wurde 1999 gegründet"
        a=false
    }
    if (y==7){
        q="Mittwald hat ihre Server Unterwasser"
        a=false
    }
    if (y==8){
        q="DigitalCampus ist eine Skriptsprache"
        a=false
    }
    if (y==9){
        q="Der Name Mittwald steht für:  Mitten im Wald"
        a=false
    }
    if (y==10){
        q="Das Backend lässt dir die Website mit Style etc. anzeigen"
        a=false
    }
    if (y==11){
        q="sind Frontend und Backend wichtig?"
        a=true
    }
    if (y==11){
        q="TLD heißt:  Second Level Domain"
        a=false
    }
    if (y==12){
        q="DNS ist wie eine Telefonauskunft des Internets"
        a=true
    }
    if (y==13){
        q="CMS heißt:  Computer Machen Spaß"
        a=false
    }
    if (y==14){
        q="TLD heißt:  Third Level Domain"
        a=true
    }
    if (y==15){
        q="Mittwald teilt eine Vision"
        a=true
    }
    if (y==16){
        q="Mittwald hat 180+ Mitarbeiter"
        a=true
    }
    if (y==17){
        q="Die meistverwendetsten CMS Systeme sind WordPress und TYPO3"
        a=true
    }
    if (y==18){
        q="Mittwald bietet CO2-neutrales Hosting an"
        a=true
    }
    if (y==19){
        q="Der Support ist von 08.30 bis 20.00 Uhr offen"
        a=false
    }
    if (y==20){
        q="DNS = Domain Name System"
        a=true
    }
    if (y==21){
        q="Mittwald startete mit der Software TYPO3"
        a=true
    }
    if (y==22){
        q="CMS Systeme erleichtern die erstellung von Webseiten"
        a=true
    }
    document.getElementById("question").innerHTML = q;
}








document.getElementById("t").addEventListener("click", truee);
document.getElementById("f").addEventListener("click", falsee);


function truee(){
    if (a==true){
        console.log("richtig")
        animationtrue();
    }
    if (a==false){
        console.log("falsch")
        animationfalse();
    }
    
}

function falsee(){
    if (a==false){
        console.log("richtig")
        animationtrue();
    }
    if (a==true){
        console.log("falsch")
        animationfalse();
    }
}


function animationtrue(){
    document.getElementById("question").className = "grün";
    document.getElementById("question").innerHTML = "Richtige Antwort!";
    timeoutID = window.setTimeout(normaltrue, 1000);
    
}
function normaltrue(){
    document.getElementById("question").className = "normal"; 
    zufall();
}


function animationfalse(){
    document.getElementById("question").className = "rot";
    document.getElementById("question").innerHTML = "Falsche Antwort.";
    timeoutID = window.setTimeout(normaltrue, 1000);
   
}
function normalfolse(){
    document.getElementById("question").className = "normal"; 
    zufall();
}
