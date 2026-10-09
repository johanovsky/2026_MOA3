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

//do konstant si ulozime tagy
//najdeme a ulozime do konstanty prepinac
const prepinac = document.getElementById("marineSwitch");
//najdeme a ulozime do konstanty obrazek
const obrazek = document.getElementById("marineImg");

//pridame posluchace udalosti (zmena) na prepinac
prepinac.addEventListener("change", prepniObrazek);

function prepniObrazek(event) {
    //kdyz to spadne sem, tak doslo ke zmene na prepinaci
    //potrebuji zjistit jaka zmena
    if(prepinac.checked) {
        //kdyz to spadne sem, bylo to OFF->ON
        obrazek.src = "Shooting.gif";
    } else {
        //kdyz to spadne sem, bylo to ON->OFF
        obrazek.src = "NotShooting.jpg";
    }
}