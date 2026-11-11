if("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
         navigator.serviceWorker.register("sw.js")
         .then(registration => {
            console.log("SW registered");
         })
         .catch(error => {
            console.log("SW registration failed: ", error);
         });
    });
}

function hra() {
    //volba hrace
    //najdeme vybrany (checked) radio button a zjistime jeho hodnotu (value)
    const hrac = document.querySelector("input[name='player']:checked").value;
    //kontrolni vypis
    console.log("Hrac zvolil: " + hrac);
    //volba pocitace - nahoda
    //pole vsech moznych hodnot
    const volby = ["Kámen", "Nůžky", "Papír"];
    //vybereme nah. index
    const index = Math.floor((Math.random() * volby.length));
    //kontrolni vypis
    console.log("Pocitac zvolil: " + volby[index]);
    //vypis volby pocitace
    document.getElementById("cpu_label").innerText = volby[index];

    //promena s vysledkem
    let result = "";

    //vyhodnoceni hry
    //prvne podle pocitace
    switch(volby[index]) {
        case "Kámen":
            //potom podle hrace
            switch(hrac) {
                case "Kámen":
                    result = "REMÍZA";
                    break;
                case "Nůžky":
                    result = "PROHRA";
                    break;
                case "Papír":
                    result = "VÝHRA";
                    break;
            }
            break;
        case "Nůžky":
            //potom podle hrace
            switch(hrac) {
                case "Kámen":
                    result = "VÝHRA";
                    break;
                case "Nůžky":
                    result = "REMÍZA";
                    break;
                case "Papír":
                    result = "PROHRA";
                    break;
            }
            break;
        case "Papír":
            //potom podle hrace
            switch(hrac) {
                case "Kámen":
                    result = "PROHRA";
                    break;
                case "Nůžky":
                    result = "VÝHRA";
                    break;
                case "Papír":
                    result = "REMÍZA";
                    break;
            }
            break;
    }

    //vypis vysledku
    document.getElementById("result_label").innerText = result;
}