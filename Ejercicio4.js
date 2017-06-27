var assert = require("assert");

function FichaPaciente(name, lastname, age, genre, city, country){
  this.name = name,
  this.lastname = lastname,
  this.age = age,
  this.genre = genre,
  this.city = city,
  this.country = country,
  this.entregarFicha = function (){
    return ("Nombre: " + this.name + " " + this.lastname + ", Edad: " + this.age + ", Pais: " + this.country);
  }

}

function paciente(name, lastname, age, genre, city, countrys){
  var pacienteF = new FichaPaciente(name, lastname, age, genre, city, countrys);
  return pacienteF.entregarFicha();

}

describe("Ejercicio 4 Ficha", function(){
  it("Prueba ", function(){
      assert.equal("Nombre: Maria Palomino, Edad: 24, Pais: Peru",paciente("Maria","Palomino",24,"Femenino","Arequipa","Peru"));
  });
});
