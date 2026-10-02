if("serviceWorker" in navigator) {
    window.addEventListener("load", ()=> {
        navigator.serviceWorker.register("sw.js")
        .then(registration => {
            console.log("SW registered");
        })
        .catch(error => {
            console.log("SW registration failed: ", error);
        });
    });
}

//promenna s hodnotou citace
let counter = 0;
//konstanty s maximem a minimem
const MAX_COUNTER_VAL = 10;
const MIN_COUNTER_VAL = -10;

function add() {
    if(counter < MAX_COUNTER_VAL) {
        //zvysime akt. hodnotu citace
        counter++;
        //najdeme span a zapiseme do nej novou hodnotu
        document.getElementById("counter_span").innerText = counter;
    }
}

function sub() {
    if(counter > MIN_COUNTER_VAL) {
        //snizime akt. hodnotu citace
        counter--;
        //najdeme span a zapiseme do nej novou hodnotu
        document.getElementById("counter_span").innerText = counter;
    }
}

function reset() {
    //akt. hodnotu citace nastavime na 0
    counter = 0;
    //najdeme span a zapiseme do nej novou hodnotu
    document.getElementById("counter_span").innerText = counter;
}

function upravCounter(operation){
    
    let pom = 1;
    if(document.getElementById("double_check").checked) {
        pom = 2;
    }

    //podle operace vykoname akci
    switch(operation) {
        case "add":
            if(counter < MAX_COUNTER_VAL) {
                counter = counter + pom;
                //counter += pom;
            }
            break;
        case "sub":
            if(counter > MIN_COUNTER_VAL) {
                //counter = counter - pom;
                counter -= pom;
            }
            break;
        case "reset":
            counter = 0;
            break;
    }
    //novou hodnotu counteru ulozime do spanu
    document.getElementById("counter_span").innerText = counter;
}

//pri kazdem obnoveni stranky
window.onload = function() {
    //sem se pise kod, ktery se ma spustit pri refreshi stranky
    document.getElementById("counter_span").innerText = counter;      
}