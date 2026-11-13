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

function hraj() {
    //hracova volba
    //potrebujeme zjistit value / hodnotu vybraneho radio-buttonu
    const hrac = document.querySelector("input[name='hrac']:checked").value;
    //kontrolni vypis
    console.log("Hrac zvolil: " + hrac);

    //pocitacova volba -> nahoda
    //pole vsech moznych voleb
    const volby = ["Kámen", "Nůžky", "Papír"];
    //nahodny index
    const index = Math.floor(Math.random() * volby.length);
    //kontrolni vypis
    console.log("Pocitac zvolil: " + volby[index]);
    //vypis volby pocitace
    document.getElementById("pocitac_label").innerText = volby[index];
    
    //vyhodnoceni hry
    let vysledek = "";
    //nejprve switch podle pocitace
    switch(volby[index]) {
        case "Kámen":
            //pote switch podle hrace
            switch(hrac) {
                case "Kámen":
                    vysledek = "REMÍZA";
                    break;
                case "Nůžky":
                    vysledek = "PROHRA";
                    break;
                case "Papír":
                    vysledek = "VÝHRA";
                    break;
            }
            break;
        case "Nůžky":
            //pote switch podle hrace
            switch(hrac) {
                case "Kámen":
                    vysledek = "VÝHRA";
                    break;
                case "Nůžky":
                    vysledek = "REMÍZA";
                    break;
                case "Papír":
                    vysledek = "PROHRA";
                    break;
            }
            break;
        case "Papír":
            //pote switch podle hrace
            switch(hrac) {
                case "Kámen":
                    vysledek = "PROHRA";
                    break;
                case "Nůžky":
                    vysledek = "VÝHRA";
                    break;
                case "Papír":
                    vysledek = "REMÍZA";
                    break;
            }
            break;
    }   
    //vypis vysledku
    document.getElementById("vysledek_label").innerText = vysledek;
}