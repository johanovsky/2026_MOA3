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

//ulozime si tagy do konstant
//tohle je ten prepinac / checkbox
const marineSwitch = document.getElementById("marineSwitch");
//jeste se mi hodi obrazek
const marineImg = document.getElementById("marineImg");

//pridame posluchace udalosti - zmena
//pri zmene se spusti fukce zmenObrazek
marineSwitch.addEventListener("change", zmenObrazek);

function zmenObrazek(event) {
    //kdyz to vleze sem, tak vime ze nastala zmena
    if(marineSwitch.checked) {
        //kdyz to spadne sem, muselo to byt z OFF->ON
        marineImg.src = "./Shooting.gif";
    } else {
        //kdyz to spadne sem, muselo to byt z ON->OFF
        marineImg.src = "./NotShooting.jpg";
    }   
}