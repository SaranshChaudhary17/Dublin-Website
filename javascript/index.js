function checkFare() {
    let age = document.getElementById("age").value;
    let output = document.getElementById("fareOutput");
    if (age <= 19) {
        output.textContent = "You can pay child's fare";
    } else {
        output.textContent = "You must pay the adult fare";
    }
}

function showCuisine() {
    let name = document.getElementById("foodName").value;
    let cuisine = document.getElementById("cuisine").value;
    let output = document.getElementById("cuisineOutput");
    output.value = `${name} prefers ${cuisine} cuisine!`;
}
