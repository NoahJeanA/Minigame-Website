
var min = 1;
var max = 6;
 

window.addEventListener("load", function() {
    zufall();
})

function zufall(){
    let x = (Math.random() * (max - min)) + min;
    let y = Math.round(x)
    if (y==1){
        q="Mittwald bietet viele Art von Servern an."
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
        q=""
        a=true
    }
    if (y==8){
        q="Unter Wasser kann man Artmen"
        a=false
    }
    if (y==9){
        q="100 / 10 sind 10"
        a=true
    }
    if (y==10){
        q="Du wirst die Frage richtig beantworten "
        a=true
    }
    if (y==11){
        q="Das Spiel funktionirt nicht"
        a=false
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
