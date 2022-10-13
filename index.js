

window.onload = function () {

    const numericvalue = document.getElementById("randomize")
    
    for (let button of numericvalue) {
        button.addEventListener("click", randomize)
    }
    
    }
    
    const randomize = function (event) {
        const number = Math.floor(Math.random()*76 + 1);
        const display = document.getElementById("result")
        const buttomcl = event.target
        const clicktest = buttomcl.number

    
        if (display === "display number") {
            display.value = clicktest
        } else {
    display.value = number
        }
        
        

 }


 const colorthesame = function (event) {


    const valuedisplay = document.getElementById("result");
    const valuenumber = document.querySelectorAll("div");

    if (valuedisplay.innerText === valuenumber.innerText) {
        valuenumber.classList.add("selected");
    }

   } 