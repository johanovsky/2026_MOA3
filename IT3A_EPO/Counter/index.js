if("serviceWorker" in navigator) {
    window.addEventListener("load", ()=> {
        navigator.serviceWorker.register("sw.js")
        .then(registration => {
            console.log("SW registerd");
        })
        .catch(error => {
            console.log("SW registration failed: ", error);
        });
    });
}

//promenna pro ulozeni hodnoty citace
let counter = 0;
//konstanty pro minimum a maximum
const MAX_COUNTER_VAL = 10;
const MIN_COUNTER_VAL = -10;

function add() {
    if(counter < MAX_COUNTER_VAL) {
        //zvys counter
        counter++;
        //vypis aktualni hodnotu do toho spanu
        document.getElementById("counter_span").innerText = counter;
    }
}

function sub() {
    if(counter > MIN_COUNTER_VAL) {
        //sniz counter
        counter--;
        //vypis aktualni hodnotu do toho spanu
        document.getElementById("counter_span").innerText = counter;
    }
}

function reset() {
    //resetuj counter
    counter = 0;
    //vypis aktualni hodnotu do toho spanu
    document.getElementById("counter_span").innerText = counter;
}