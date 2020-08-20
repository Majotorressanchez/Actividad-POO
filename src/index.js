import "./styles.css";

//document.getElementById("app").innerHTML = `Espero mi 5.0`;

class carro {
  constructor(Modelo, marca, color, matricula) {
    this.Modelo = Modelo;
    this.color = color;
    this.marca = marca;
    this.matricula = matricula;
  }

  carro() {
  setTimeout(() =>console.log(`El automovil es modelo ${this.Modelo}, color: ${this.color}, marca: ${this.marca}, matricula ${this.matricula}`),1000);
    return this;
  }

  Prender() {
    setTimeout(() => console.log(`El conductor entro al automovil`), 2000);
    setTimeout(() => console.log(`Se inserto la llave de arranque`), 3000);
    setTimeout(() => console.log(`Se aseguro de que el carro esté en neutro.`),4000);
    setTimeout(() => console.log(`Se arranca el motor`), 5000);
    setTimeout(() => console.log(`Se arranco el automovil`), 6000);
    return this;
  }

  Acelerar() {
    setTimeout(() => console.log(`El automovil acelero`), 7000);
    return this;
  }

  Velocidad() {
    
    setTimeout(
      () => console.log(`El automovil tiene una velocidad de 300km/h`), 8000);
    return this;
  }

  Llegada() {
    
    setTimeout(() => console.log(`El automovil llego a su destino`), 9000);
    return this;
  }

  Redujo() {
    
    setTimeout(() => console.log(`El automovil redujo su velocidad`), 10000);
    return this;
  }
  Frenar() {
    
    setTimeout(() => console.log(`El automovil freno`), 11000);
    return this;
  }
 
  Apagar() {
    
    setTimeout(() => console.log(`El automovil se apago`), 12000);
    return this;
  }
}

const nissan = new carro("Kicks", "negro", "Nissan", "4k2a51");
console.log(nissan.carro());
console.log(nissan.Prender());
console.log(nissan.Acelerar());
console.log(nissan.Velocidad());
console.log(nissan.Llegada());
console.log(nissan.Redujo());
console.log(nissan.Frenar());
console.log(nissan.Apagar());
