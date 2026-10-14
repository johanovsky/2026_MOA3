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

//najdu si prepinac
const prepinac = document.getElementById("marineSwitch");
//najdu si obrazek
const obrazek = document.getElementById("marineImg");

//pridame posluchace udalosti zmena na prepinaci
prepinac.addEventListener("change", prepniObrazek);

//funkce pro zmenu obrazku
function prepniObrazek(event) {
    //sem se to dostane kdyz se zmeni prepinac
    //podle prepinace zjistim jak zmena to byla
    if(prepinac.checked) {
        //zmena byla z OFF->ON
        obrazek.src = "Shooting.gif";
    } else {
        //zmena byla z ON->OFF
        obrazek.src = "NotShooting.jpg";
    }
}