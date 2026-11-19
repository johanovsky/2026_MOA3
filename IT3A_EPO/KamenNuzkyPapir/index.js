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

function hra() {
    //hracova volba
    //nalezneme vybrany checkbox a stahneme z nej value
    const hrac = document.querySelector("input[name='hrac']:checked").value;
    //kontrolni vypis
    console.log("Hrac zvolil: " + hrac);
    //volba pocitace - nahodna
    const volby = ["Kámen", "Nůžky", "Papír"];
    //nahodny index
    const index = Math.floor(Math.random() * volby.length);
    //kontrolni vypis
    console.log("Pocitac zvolil: " + volby[index]);
    //vypis volby pc
    document.getElementById("cpu_label").innerText = volby[index];

    //vyhodnoceni hry
    let vysledek;
    //nejdrive switch podle pocitace
    switch(volby[index]) {
        case "Kámen":
            //nyni switch podle hrace
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
            //nyni switch podle hrace
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
            //nyni switch podle hrace
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
    document.getElementById("result_label").innerText = vysledek;
}