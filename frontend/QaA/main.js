var x;
var y =3;
var min = 1;
var max = 12;
 





function zufall(){
    x = (Math.random() * (max - min)) + min;
    y = Math.round(x)
    document.getElementById("question").innerHTML = q;
    swichquest();

}




function swichquest(){
    if (y==1){
        q="was ist 1+1"
        a=true
    }
    if (y==2){
        q="aws ist 2+2"
        a=false
    }
    if (y==3){
        q="aws ist 3+3"
        a=true
    }
    
    if (y==4){
        q="aws ist 4+4"
        a=false
    }
    if (y==5){
        q="aws ist 5+5"
        a=true
    }
    if (y==6){
        q="aws ist 6+6"
        a=false
    }
    if (y==7){
        q="aws ist 7+7"
        a=true
    }
    if (y==8){
        q="aws ist 8+8"
        a=false
    }
    if (y==9){
        q="aws ist 9+9"
        a=true
    }
    if (y==10){
        q="aws ist 10+10"
        a=true
    }
    if (y==11){
        q="aws ist 11+11"
        a=false
    }
}
object.addEventListener("click", truee);
object.addEventListener("click", falsee);

function truee(){
    console.log("true")
}

function falsee(){
    console.log("false")
}



