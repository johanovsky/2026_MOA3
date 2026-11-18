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

function pocitej() {
    //nejprve stahneme data
    //z inputu to budou stringy, takze pretypujeme na float
    const op1 = parseFloat(document.getElementById("operand1").value);
    const op2 = parseFloat(document.getElementById("operand2").value);
    //ze selectu vytahnu operaci (value) jako string
    const operation = document.getElementById("operace").value;

    //kontrolni vypisy
    console.log("Operand 1: " + op1);
    console.log("Operand 2: " + op2);
    console.log("Operace: " + operation);

    //promenna pro vysledek
    let vysledek;

    //kontrola vstupu
    if(isNaN(op1) || isNaN(op2)) {
        //jestlize to spadne sem, tak nejmene jeden operand neni cislo
        vysledek = "Neplatne operandy";
    } else if((op2 === 0) && (operation === "divide")) {
        //deleni nulou
        vysledek = "Nelze delit nulou";
    } else {
        //kdyz to spadne sem, tak mam oba operandy -> muzu pocitat
        switch((operation)) {
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
    document.getElementById("vysledek").innerText = vysledek;
    
}