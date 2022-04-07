var player1=false
var player2=true
var aclick1=false
var aclick2=false
var aclick3=false
var aclick4=false
var aclick5=false
var aclick6=false
var aclick7=false
var aclick8=false
var aclick9=false
var bclick1=false
var bclick2=false
var bclick3=false
var bclick4=false
var bclick5=false
var bclick6=false
var bclick7=false
var bclick8=false
var bclick9=false
var bwinner=false
var winner=false
var clickrequest1=false
var clickrequest2=false
var clickrequest3=false
var clickrequest4=false
var clickrequest5=false
var clickrequest6=false
var clickrequest7=false
var clickrequest8=false
var clickrequest9=false
var gamewinner  = "Der rote Spieler"
var gamewinner2 = "Der grüne Spieler"

window.addEventListener("load", function () {
    if (document.getElementById("t")) {
        document.getElementById("a1").addEventListener("click", playerdraft1);
        document.getElementById("a2").addEventListener("click", playerdraft2);
        document.getElementById("a3").addEventListener("click", playerdraft3);
        document.getElementById("b1").addEventListener("click", playerdraft4);
        document.getElementById("b2").addEventListener("click", playerdraft5);
        document.getElementById("b3").addEventListener("click", playerdraft6);
        document.getElementById("c1").addEventListener("click", playerdraft7);
        document.getElementById("c2").addEventListener("click", playerdraft8);
        document.getElementById("c3").addEventListener("click", playerdraft9);
        //setInterval ("playerdraft1", 100)
        //setInterval ("playerdraft2", 100)
        //setInterval ("playerdraft3", 100)
        //setInterval ("playerdraft4", 100)
        //setInterval ("playerdraft5", 100)
        //setInterval ("playerdraft6", 100)
        //setInterval ("playerdraft7", 100)
        //setInterval ("playerdraft8", 100)
        //setInterval ("playerdraft9", 100)
        setInterval ("buttonlog()", 100)
    }
})

setInterval(() => {
    window.addEventListener("load", function() {
        if (document.getElementById("showwinner")){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            } 
        }
    })
},10);



function playerdraft1() {
    if (clickrequest1==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("a1").className="Spieler1"
            aclick1=true
            clickrequest1=true
            setchecker();
        }
    else if (clickrequest1==false) {
            player1=true;
            player2=false;
            document.getElementById("a1").className="Spieler2"
            bclick1=true
            clickrequest1=true
            setchecker();
        }
    }
}

function playerdraft2() {
    if (clickrequest2==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("a2").className="Spieler1"
            aclick2=true
            clickrequest2=true
            setchecker();
        }
    else if (clickrequest2==false) {
            player1=true;
            player2=false;
            document.getElementById("a2").className="Spieler2"
            bclick2=true
            clickrequest2=true
            setchecker();
        }
    }
}

function playerdraft3() {
    if (clickrequest3==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("a3").className="Spieler1"
            aclick3=true
            clickrequest3=true
            setchecker();
        }
    else if (clickrequest3==false){
            player1=true;
            player2=false;
            document.getElementById("a3").className="Spieler2"
            bclick3=true
            clickrequest3=true
            setchecker();
        }
    }
}

function playerdraft4() {
    if (clickrequest4==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("b1").className="Spieler1"
            aclick4=true
            clickrequest4=true
            setchecker();
        }
    else if(clickrequest4==false){ 
            player1=true;
            player2=false;
            document.getElementById("b1").className="Spieler2"
            bclick4=true
            clickrequest4=true
            setchecker();
        }
    }
}

function playerdraft5() {
    if (clickrequest5==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("b2").className="Spieler1"
            aclick5=true
            clickrequest5=true
            setchecker();
        }
    else if (clickrequest5==false){
            player1=true;
            player2=false;
            document.getElementById("b2").className="Spieler2"
            bclick5=true
            clickrequest5=true
            setchecker();
        }
    }
}

function playerdraft6() {
    if (clickrequest6==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("b3").className="Spieler1"
            aclick6=true
            clickrequest6=true
            setchecker();
        }
    else if (clickrequest6==false){
            player1=true;
            player2=false;
            document.getElementById("b3").className="Spieler2"
            bclick6=true
            clickrequest6=true
            setchecker();
        }
    }
}

function playerdraft7() {
    if (clickrequest7==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("c1").className="Spieler1"
            clickrequest7=true
            aclick7=true
            setchecker();
        }
    else if (clickrequest7==false){
            player1=true;
            player2=false;
            document.getElementById("c1").className="Spieler2"
            clickrequest7=true
            bclick7=true
            setchecker();
        }
    }
}

function playerdraft8() {
    if (clickrequest8==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("c2").className="Spieler1"
            aclick8=true
            clickrequest8=true
            setchecker();
        }
    else if(clickrequest8==false){
            player1=true;
            player2=false;
            document.getElementById("c2").className="Spieler2"
            clickrequest8=true
            bclick8=true
            setchecker();
        }
    }
}

function playerdraft9() {
    if (clickrequest9==false) {
        if (player1==true) {
            player1=false;
            player2=true;
            document.getElementById("c3").className="Spieler1"
            clickrequest9=true
            aclick9=true
            setchecker();
        }
    else if (clickrequest9==false){
            player1=true;
            player2=false;
            document.getElementById("c3").className="Spieler2"
            clickrequest9=true
            bclick9=true
            setchecker();
        }
    }
}

//WINNER
function achecker1() {
    if (winner==false)
    if (aclick1&&aclick2&&aclick3==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker2() {
    if (winner==false)
    if (aclick4&&aclick5&&aclick6==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker3() {
    if (winner==false)
    if (aclick7&&aclick8&&aclick9==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker4() {
    if (winner==false)
    if (aclick1&&aclick4&&aclick7==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker5() {
    if (winner==false)
    if (aclick2&&aclick5&&aclick8==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker6() {
    if (winner==false)
    if (aclick3&&aclick6&&aclick9==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker7() {
    if (winner==false)
    if (aclick1&&aclick5&&aclick9==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

function achecker8() {
    if (winner==false)
    if (aclick7&&aclick5&&aclick3==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner)+ " hat gewonnen");
            winner = true
        }
    }
}

//WINNER2
function bchecker1() {
    if (winner==false)
    if (bclick1&&bclick2&&bclick3==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2 )+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker2() {
    if (winner==false)
    if (bclick4&&bclick5&&bclick6==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker3() {
    if (winner==false)
    if (bclick7&&bclick8&&bclick9==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker4() {
    if (winner==false)
    if (bclick1&&bclick4&&bclick7==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
           winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker5() {
    if (winner==false)
    if (bclick2&&bclick5&&bclick8==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker6() {
    if (winner==false)
    if (bclick3&&bclick6&&bclick9==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker7() {
    if (winner==false)
    if (bclick1&&bclick5&&bclick9==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}

function bchecker8() {
    if (winner==false)
    if (bclick7&&bclick5&&bclick3==true) {
        if (player1==false){
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
        else {
            document.getElementById("showwinner").innerHTML=((gamewinner2)+ " hat gewonnen");
            winner = true
        }
    }
}


function buttonlog(){
    if (winner==true){
        clickrequest1=true
        clickrequest2=true
        clickrequest3=true
        clickrequest4=true
        clickrequest5=true
        clickrequest6=true
        clickrequest7=true
        clickrequest8=true
        clickrequest9=true
    }   
}
function setchecker(){
        achecker1();
        achecker2();
        achecker3();
        achecker4();
        achecker5();
        achecker6();
        achecker7();
        achecker8();
        bchecker1();
        bchecker2();
        bchecker3();
        bchecker4();
        bchecker5();
        bchecker6();
        bchecker7();
        bchecker8();
    }
