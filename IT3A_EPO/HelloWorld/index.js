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

function sayHello() {
    if(document.getElementById("hello").innerText == "Hello World!") {
        document.getElementById("hello").innerText = "Ahoj Svete!";
    } else {
        document.getElementById("hello").innerText = "Hello World!";
    }
}