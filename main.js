
var Cookie
var multi
var preis1
var preis2
var time
var stg1
var stg2
var timeoutID
var preismulti1
var preismulti2

preis1 = 25
preis2 = 25
Cookie = 0
multi = 1
time = 2000
stg1 = 1
stg2 = 1
preismulti1= 1.5
preismulti2= 1.5

window.addEventListener("load", function() {
   if (document.getElementById("button","shop1")) {
     document.getElementById("button").addEventListener("click", cookiebutton);
     document.getElementById("shop1").addEventListener("click", shop1);
     document.getElementById("shop2").addEventListener("click", shop2);
    }
   });
   
   function cookiebutton() {
    document.getElementById("Points").innerHTML = "Cookies: " + Cookie.toFixed(0); 
    Cookie = Cookie + multi
    settimer();
   } 

     
   function addcookie(){
    document.getElementById("Points").innerHTML = "Cookies: " + Math.round(Cookie);
    Cookie=Cookie+multi
    window.setTimeout(addcookie,time);
    settimer();
   }

    
     
   

   function shop1(){
    if (Cookie >= preis1){
      Cookie=Cookie-preis1
      multi=multi+1
      document.getElementById("Points").innerHTML = "Cookies: " + Math.round(Cookie);
      document.getElementById("P1").innerHTML = preis1.toFixed(0)+" $";
      document.getElementById("stuck1").innerHTML = stg1+" stg.";
      preis1=preis1*preismulti1
      preismulti1=preismulti1*1.05
      stg1=stg1+1
    }
    };
   

   function shop2() {
     if (Cookie >= preis2) {
       Cookie=Cookie-preis2
       time = time - 10
       document.getElementById("Points").innerHTML = "Cookies: " + Math.round(Cookie);
       document.getElementById("P2").innerHTML = preis2.toFixed(0)+" $";
       document.getElementById("stuck2").innerHTML = stg2+" stg.";
       stg2=stg2+1
       addcookie();
       preis2=preis2*preismulti2
       preismulti2=preismulti2*1.05     
   }

  }
   function preisrepeat(){
    document.getElementById("P1").innerHTML = preis1.toFixed(0)+" $";
    document.getElementById("P2").innerHTML = preis2.toFixed(0)+" $";
    document.getElementById("stuck1").innerHTML = stg1+" stg.";
    document.getElementById("stuck2").innerHTML = stg2+" stg.";
    document.getElementById("Points").innerHTML = "Cookies: " + Math.round(Cookie);
    window.setTimeout(preisrepeat,10);
   }


   function settimer() {
    document.getElementById("button").className = "cookieanimation";
    timeoutID = window.setTimeout(animation, 100);
  }

   function animation() {
     document.getElementById("button").className = "cookie";
    }
  

  


   

preisrepeat();





  