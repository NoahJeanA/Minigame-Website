var player = 1
var winner = false
var buttons={
    "button1":{
        "click":false,
        "player":{},
    },

    "button2":{
        "click":false,
        "player":{},
    },

    "button3":{
        "click":false,
        "player":{},
    },

    "button4":{
        "click":false,
        "player":{},
    },

    "button5":{
        "click":false,
        "player":{},
    },

    "button6":{
        "click":false,
        "player":{},
    },

    "button7":{
        "click":false,
        "player":{},
    },

    "button8":{
        "click":false,
        "player":{},
    },

    "button9":{
        "click":false,
        "player":{},
    }
}

window.addEventListener("load", function () {
    if (document.getElementById("t")) {
        document.getElementById("a1").addEventListener("click", b1);
        document.getElementById("a2").addEventListener("click", b2);
        document.getElementById("a3").addEventListener("click", b3);
        document.getElementById("b1").addEventListener("click", b4);
        document.getElementById("b2").addEventListener("click", b5);
        document.getElementById("b3").addEventListener("click", b6);
        document.getElementById("c1").addEventListener("click", b7);
        document.getElementById("c2").addEventListener("click", b8);
        document.getElementById("c3").addEventListener("click", b9);
        document.getElementById("clickaudio");
        document.getElementById("winaudio");

    }
})

function switchplayer(){
    if (player==1){
        player=2
    }
    else if (player==2){
        player=1
    }
}
function clicksound(){
    document.getElementById("clickaudio").play();
}

function winsound(){
    document.getElementById("winaudio").play();
}

function b1(){
    if (buttons.button1.click==false){
        buttons.button1.click=true;
        clicksound()
        buttons.button1.player=player;
        console.log(buttons.button1.click);
        switchplayer();
        if (player==1){
            document.getElementById("a1").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("a1").className="Spieler2"
        }
    }
};

function b2(){
    if (buttons.button2.click==false){
        buttons.button2.click=true;
        clicksound()
        buttons.button2.player=player;
        console.log(buttons.button2.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("a2").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("a2").className="Spieler2"
        }
    }
};

function b3(){
    if (buttons.button3.click==false){
        buttons.button3.click=true;
        clicksound()
        buttons.button3.player=player;
        console.log(buttons.button3.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("a3").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("a3").className="Spieler2"
        }
    }
};


function b4(){
    if (buttons.button4.click==false){
        buttons.button4.click=true;
        clicksound()
        buttons.button4.player=player;
        console.log(buttons.button4.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("b1").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("b1").className="Spieler2"
        }
    }
};

function b5(){
    if (buttons.button5.click==false){
        buttons.button5.click=true;
        clicksound()
        buttons.button5.player=player;
        console.log(buttons.button2.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("b2").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("b2").className="Spieler2"
        }
    }
};


function b6(){
    if (buttons.button6.click==false){
        buttons.button6.click=true;
        clicksound()
        buttons.button6.player=player;
        console.log(buttons.button6.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("b3").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("b3").className="Spieler2"
        }
    }
};

function b7(){
    if (buttons.button7.click==false){
        buttons.button7.click=true;
        clicksound()
        buttons.button7.player=player;
        console.log(buttons.button7.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("c1").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("c1").className="Spieler2"
        }
    }
};

function b8(){
    if (buttons.button8.click==false){
        buttons.button8.click=true;
        clicksound()
        buttons.button8.player=player;
        console.log(buttons.button8.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("c2").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("c2").className="Spieler2"
        }
    }
};


function b9(){
    if (buttons.button9.click==false){
        buttons.button9.click=true;
        clicksound()
        buttons.button9.player=player;
        console.log(buttons.button9.click,player);
        switchplayer();
        if (player==1){
            document.getElementById("c3").className="Spieler1"
        }
        else if (player==2){
            document.getElementById("c3").className="Spieler2"
        }
    }
};

function checkwinner(){
// # # #
// + + +
// + + +
    if (buttons.button1.click&&buttons.button2.click&&buttons.button3.click==true){
        if (buttons.button1.player+buttons.button2.player+buttons.button3.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button1.player&&buttons.button2.player&&buttons.button3.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// + + +
// # # #
// + + +
    if (buttons.button4.click&&buttons.button5.click&&buttons.button6.click==true){
        if (buttons.button4.player+buttons.button5.player+buttons.button6.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button4.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button4.player+buttons.button5.player+buttons.button6.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button4.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }

    if (buttons.button7.click&&buttons.button8.click&&buttons.button9.click==true){
        if (buttons.button7.player+buttons.button8.player+buttons.button9.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button7.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button7.player+buttons.button8.player+buttons.button9.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button7.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// + + +
// + + +
// # # #
    if (buttons.button1.click&&buttons.button4.click&&buttons.button7.click==true){
        if (buttons.button1.player+buttons.button4.player+buttons.button7.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button1.player+buttons.button4.player+buttons.button7.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// # + +
// # + +
// # + +
    if (buttons.button1.click&&buttons.button4.click&&buttons.button7.click==true){
        if (buttons.button1.player+buttons.button4.player+buttons.button7.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button1.player+buttons.button4.player+buttons.button7.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// + # +
// + # +
// + # +
    if (buttons.button2.click&&buttons.button5.click&&buttons.button8.click==true){
        if (buttons.button2.player+buttons.button5.player+buttons.button8.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button2.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button2.player+buttons.button5.player+buttons.button8.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=((buttons.button2.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// + + #
// + + #
// + + #
    if (buttons.button3.click&&buttons.button6.click&&buttons.button9.click==true){
        if (buttons.button3.player+buttons.button6.player+buttons.button9.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button3.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button3.player+buttons.button6.player+buttons.button9.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button3.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// # + +
// + # +
// + + #
    if (buttons.button1.click&&buttons.button5.click&&buttons.button9.click==true){
        if (buttons.button1.player+buttons.button5.player+buttons.button9.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }
    
        else if (buttons.button1.player+buttons.button5.player+buttons.button9.player==6){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button1.player)+ " hat gewonnen")
                winner = true 
                winsound()
            }
        }
    }
// + + #
// + # +
// # + +
    if (buttons.button3.click&&buttons.button5.click&&buttons.button7.click==true){
        if (buttons.button3.player+buttons.button5.player+buttons.button7.player==3){
            if (winner==false){
                document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button3.player)+ " hat gewonnen")
                winner=true
                winsound()
            }
        }

    else if (buttons.button3.player+buttons.button5.player+buttons.button7.player==6){
        if (winner==false){
            document.getElementById("showwinner").innerHTML=("Spieler "+(buttons.button3.player)+ " hat gewonnen")
            winner = true 
            winsound()
            }
        }
    }   
};

function winbuttonlock(){
    if (winner==true){
        buttons.button1.click=true
        buttons.button2.click=true
        buttons.button3.click=true
        buttons.button4.click=true
        buttons.button5.click=true
        buttons.button6.click=true
        buttons.button7.click=true
        buttons.button8.click=true
        buttons.button9.click=true
    }
}

function ifnowinner(){
    if (winner==false){
        if (buttons.button1.player+buttons.button2.player+buttons.button3.player+buttons.button4.player+buttons.button5.player+buttons.button6.player+buttons.button7.player+buttons.button8.player+buttons.button9.player==13){
            winner = true 
            document.getElementById("showwinner").innerHTML=("Unentschieden")
            winsound()
        }
    }
}

 setInterval(() => {
     checkwinner();
     winbuttonlock();
     ifnowinner();
 }, 10);
