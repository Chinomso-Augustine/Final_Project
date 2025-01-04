
function game() {
    let randNum = Math.random();
    if (randNum < .5) {
        document.querySelector(".display").textContent = "Head";
    }
    else {
        document.querySelector(".display").textContent = "Tail";
    }
}

