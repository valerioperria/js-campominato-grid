// creare una funzione che generi progressivamente dei numeri da min a max, e che inserisca i numeri all'interno di un div insieme ad una classe (addClass)
function progressiveNumbers(min, max, addClass) {
    let x = "";
    for (i = min; i <= max; i++) {
        x += `<div class=${addClass}>${i}</div>`;
    }
    return x;
}

document.querySelector(".grid").innerHTML = progressiveNumbers(1, 100, "cell");

// fare un eventListner che al click sul bottone start avvii la griglia

const btn = document.querySelector("button");
const grid = document.querySelector(".grid");

btn.addEventListener("click", function () {
    grid.classList.add("active");
})

// fare in modo che al click su x cella questa si colori

const cll = document.querySelectorAll(".cell");

for (let i = 0; i < cll.length; i++) {
    cll[i].addEventListener("click", function () {
        cll[i].classList.add("cll-active");
        console.log(parseInt(cll[i].textContent))
    });

}


