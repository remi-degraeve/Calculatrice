let nombre1 = ''; // variable qui stocke le nombre saisi


function affichage(chiffre) {
    document.getElementById('txt').value += chiffre; //affiche le chiffre du boutton selectionné
}

function efface() {
    document.getElementById('txt').value = document.getElementById('txt').value.slice(0, -1); //affiche la même chose sans le dernier élément
}

function efface1() {
    document.getElementById('txt').value = ''; // remplace la valeur actuelle par rien
    nombre1 = '';
}


function calcule1() {
    nombre1 = document.getElementById('txt').value;

    try {
        document.getElementById("txt").value = eval(nombre1); // affiche le résultat du calcule
        nombre1 = '';
    } catch (error) {
        window.alert("Une erreur s'est produite : " + error.message); // affiche une erreur si eval(nombre1) n'existe pas
    }
}
