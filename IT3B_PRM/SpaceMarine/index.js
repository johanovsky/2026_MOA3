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

//tagy si vytahneme do konstant
//najdeme a vytahneme si do konstanty prepinac
const prepinac = document.getElementById("marineSwitch");
//najdeme a vytahneme si do konstanty obrazek
const obrazek = document.getElementById("marineImg");

//pridani posluchace na udalost (zmena)
prepinac.addEventListener("change", prepniObrazek);

//funkce ktera se spusti pri zmene
function prepniObrazek(event) {
    //kdyz se program dostane sem -> urcite nastala nejaka zmena na prepinaci
    //zjistime jaka zmena
    if(prepinac.checked) {
        //kdyz to spadne sem, tak to bylo z OFF -> ON
        obrazek.src = "Shooting.gif";
    } else {
        //kdyz to spadne sem, tak to bylo z ON -> OFF
        obrazek.src = "NotShooting.jpg";
    }
}