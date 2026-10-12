if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
         navigator.serviceWorker.register("sw.js")
         .then(registration => {
            console.log("SW registered");
         })
         .error(error => {
            console.log("SW registration failed: ", error);
         });
    });
}

//promenna s hodnotou citace
let counter = 0;
//konstanty
const MAX_COUNTER_VAL = 10;
const MIN_COUNTER_VAL = -10;

function add() {
   counter++;
   document.getElementById("counter_span").innerText = counter;
}

function sub() {
   counter--;
   document.getElementById("counter_span").innerText = counter;
}

function reset() {
   counter = 0;
   document.getElementById("counter_span").innerText = counter;
}

function upravCounter(operation) {
   //kontrola double check-boxu
   let pom = 1;
   if(document.getElementById("double_check").checked) {
      //kdyz to spadne sem, je check-box zatrhnuty
      pom = 2;
   }

   //podle parametru zvolime operaci
   switch(operation) {
      case "add":
         if(counter < MAX_COUNTER_VAL) {
            counter = counter + pom;
         }
         break;
      case "sub":
         if(counter > MIN_COUNTER_VAL) {
            counter -= pom;
         }
         break;
      case "reset":
         counter = 0;
         break;
   }
   //aktualizuju hodnotu counteru ve spanu
   document.getElementById("counter_span").innerText = counter;
}

//funkce ktera se spusti pri kazde obnove stranky
window.onload = function() {
   document.getElementById("counter_span").innerText = 0;
}