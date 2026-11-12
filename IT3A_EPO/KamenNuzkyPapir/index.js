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

}