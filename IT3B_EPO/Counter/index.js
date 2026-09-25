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
const MAX_COUNTER_VAL = 10;
const MIN_COUNTER_VAL = -10;

function add() {
    //kontrola maxima
    if(counter < MAX_COUNTER_VAL) {
        //zvys counter
        counter++;
        //najdeme span zapiseme do nej novou hodnotu counteru
        document.getElementById("counter_span").innerText = counter;
    }
}

function sub() {
    //kontrola minima
    if(counter > MIN_COUNTER_VAL) {
        //sniz counter
        counter--;
        //najdeme span zapiseme do nej novou hodnotu counteru
        document.getElementById("counter_span").innerText = counter;
    }
}

function reset() {
    //uloz do counteru 0
    counter = 0;
    //najdeme span zapiseme do nej novou hodnotu counteru
    document.getElementById("counter_span").innerText = counter;
}

function upravCounter(operace) {

    let pom = 1;
    //kontrola double-checkboxu
    if(document.getElementById("double_check").checked) {
        //pokud to spadne sem, checkbox JE zatrhnuty
        pom = 2;
    }

    switch(operace) {
        case "add":
            if(counter < MAX_COUNTER_VAL) {
                counter = counter + pom;
            }
            break;
        case "sub":
            if(counter > MIN_COUNTER_VAL) {
                counter = counter - pom;
            }
            break;
        case "reset":
            counter = 0;
            break;
    }

    //zapiseme novou hodnotu do spanu
    document.getElementById("counter_span").innerText = counter;
}

//funkce ktera se spusti pri kazdem nacteni stranky
window.onload = function() {
    document.getElementById("counter_span").innerText = counter;
}