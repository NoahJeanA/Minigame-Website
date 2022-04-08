
var min = 1;
var max = 11;
var z = 0;
var y

window.addEventListener("load", function() {
    zufall();
    document.getElementById("t").addEventListener("click", truee);
    document.getElementById("f").addEventListener("click", falsee);
})

function zufall(){
    do {
        let x = (Math.random() * (max - min)) + min;
        y = Math.round(x)       
    } while (z==y)
    z = y;
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
        q="Frontend und Backend sind wichtig"
        a=false
    }
    document.getElementById("question").innerHTML = q;
           
}
    










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
    document.getElementById("question").innerHTML = "Das war RICHTIG";
    timeoutID = window.setTimeout(normaltrue, 1000);
    
}
function normaltrue(){
    document.getElementById("question").className = "normal"; 
    zufall();
}


function animationfalse(){
    document.getElementById("question").className = "rot";
    document.getElementById("question").innerHTML = "Das war FALSCH";
    timeoutID = window.setTimeout(normaltrue, 1000);
   
}
function normalfolse(){
    document.getElementById("question").className = "normal"; 
    zufall();
}
