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

function sayHello() {
    //najdeme tag s id a zapiseme do jeho textu
    if(document.getElementById("hello").innerText == "Hello world!") {
        document.getElementById("hello").innerText = "Ahoj svete!";
    } else {
        document.getElementById("hello").innerText = "Hello world!";
    }
}