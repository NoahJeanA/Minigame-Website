
var min = 1;
var max = 12;
 

window.addEventListener("load", function() {
    zufall();
})

function zufall(){
    let x = (Math.random() * (max - min)) + min;
    let y = Math.round(x)
    if (y==1){
        q="Das Spiel funktionirt"
        a=true
    }
    if (y==2){
        q="Wir sind gerade in Afrika"
        a=false
    }
    if (y==3){
        q="Bash ist eine Sprach"
        a=true
    }
    
    if (y==4){
        q="100/5 sind 25"
        a=false
    }
    if (y==5){
        q="Deutschland ist ein Land"
        a=true
    }
    if (y==6){
        q="Es war noch nie jemand auf dem Mond"
        a=false
    }
    if (y==7){
        q="Mir fallen keine Aussage mehr ein"
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
