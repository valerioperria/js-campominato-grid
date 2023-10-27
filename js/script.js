// creare una funzione che generi progressivamente dei numeri da x a y, e che inserisca i numeri all'interno di un div con una classe
function progressiveNumbers(min, max, addClass) {
    let x = "";
    for (i = min; i <= max; i++) {
        x += `<div class=${addClass}>${i}</div>`;
    }
    console.log(x)
    return x;
}

document.querySelector(".grid").innerHTML = progressiveNumbers(1, 100, "cell");

