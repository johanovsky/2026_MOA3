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

function pocitej() {
    //stahneme operandy a prevedeme na float
    const op1 = parseFloat(document.getElementById("operand1").value);
    const op2 = parseFloat(document.getElementById("operand2").value);
    //stahneme operaci a nechame ji jako string
    const operation = document.getElementById("operace").value;

    //kontrolni vypis
    console.log("Operand 1: " + op1);
    console.log("Operand 2: " + op2);
    console.log("Operace: " + operation);

    //promenna pro vysledek
    let vysledek;

    //kontrola vstupu
    if((isNaN(op1)) || (isNaN(op2))) {
        //nejmene jeden operand je spatne
        vysledek = "Zadej dvě platná čísla";
    } else if((operation === "divide") && (op2 === 0)) {
        vysledek = "Nelze dělit 0";
    } else {
        //mame oba operandy -> muzeme pocitat
        switch(operation) {
            case "add":
                vysledek = op1 + op2;
                break;
            case "subtract":
                vysledek = op1 - op2;
                break;
            case "multiply":
                vysledek = op1 * op2;
                break;
            case "divide":
                vysledek = op1 / op2;
                break;
            default:
                vysledek = "Neznámá operace";
                break;
        }
    }

    //vypis vysledku
    document.getElementById("vysledek").innerText = vysledek;   

}