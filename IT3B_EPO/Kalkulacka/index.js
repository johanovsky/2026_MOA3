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
    //stahneme data z inputu
    //cisla rovnou prevedeme na float
    const op1 = parseFloat(document.getElementById("operand1").value);
    const op2 = parseFloat(document.getElementById("operand2").value);
    //operace zustava string
    const operation = document.getElementById("operace").value;

    //kontrolni vypis
    console.log("operand1: " + op1);
    console.log("operand2: " + op2);
    console.log("operace: " + operation);

    //promenna pro vysledek
    let vysledek;

    //kontrola dat
    if((isNaN(op1)) || (isNaN(op2))) {
        //neplatne operandy
        vysledek = "Zadej dvě platná čísla";
    } else if((operation === "divide") && (op2 === 0)) {
        vysledek = "Nelze dělit nulou";
    } else {
        //oba operandy jsou platne
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