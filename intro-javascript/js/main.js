function button() {
    alert("YEY! You clicked me!");
    document
        .getElementById("thanks")
        .innerHTML = "You rocks!";
}

function google() {
    window.open("https://google.com");
}

// Good way:
function newPhrase(element) {
    element.innerHTML = "A demon was just released :)";
}

function oldPhrase(element) {
    element.innerHTML = "You rocks!";
}

function load() {
    alert("Essa função é chamada quando a página é carregada");
}

function change(element) {
    alert("Essa função é chamada quando é feita alguma modificação no elemento. Por exemplo: a opção escolhida foi " + element.value + ".");
}