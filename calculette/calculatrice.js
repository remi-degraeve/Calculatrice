class BasicCalculator {
    constructor() {
      this.nombre1 = ''; // variable qui stocke le nombre saisi
    }
  
    affichage(chiffre) {
      document.getElementById('txt').value += chiffre; //affiche le chiffre du boutton selectionné
    }
  
    efface() {
      document.getElementById('txt').value = document.getElementById('txt').value.slice(0, -1); //affiche la même chose sans le dernier élément
    }
  
    efface1() {
      document.getElementById('txt').value = ''; // remplace la valeur actuelle par rien
      this.nombre1 = '';
    }
  
    calcule1() {
      this.nombre1 = document.getElementById('txt').value;
  
      try {
          document.getElementById("txt").value = eval(this.nombre1); // affiche le résultat du calcule
          this.nombre1 = '';
      } catch (error) {
          window.alert("Une erreur s'est produite : " + error.message); // affiche une erreur si eval(this.nombre1) n'existe pas
      }
    }
  }
  
  const calculator = new BasicCalculator();
