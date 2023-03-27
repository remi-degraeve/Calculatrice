class BasicCalculator {
    constructor() {
      this.nombre1 = ''; 
    }
  
    affichage(chiffre) {
      document.getElementById('txt').value += chiffre; 
    }
  
    efface() {
      document.getElementById('txt').value = document.getElementById('txt').value.slice(0, -1); 
    }
  
    efface1() {
      document.getElementById('txt').value = ''; 
      this.nombre1 = '';
    }
  
    calcule1() {
      this.nombre1 = document.getElementById('txt').value;
  
      try {
          document.getElementById("txt").value = eval(this.nombre1); 
          this.nombre1 = '';
      } catch (error) {
          window.alert("Une erreur s'est produite : " + error.message); 
      }
    }
  }
  
  const calculator = new BasicCalculator();
