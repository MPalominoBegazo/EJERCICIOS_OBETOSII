var assert = require("assert");

function DeveloperLaboratoria(name, age, ocuppation, genre){
  this.name = name,
  this.age = age,
  this.ocuppation = ocuppation,
  this.genre = genre,
  this.superCoder = function(){
    if(this.genre == "Femenino" ){
      if(this.age >= 17)
      {
        if( this.ocuppation == "Estudiante" || this.ocuppation == "Web Developer" ){
              return (this.name + " you are awesome");
        }
      }
    }
    else{
      return ("Ups!!!");
    }
  }
 }



function developer(nombre,edad,ocupacion,genero){
  var develop = new DeveloperLaboratoria(nombre,edad,ocupacion,genero);
  return develop.superCoder();
}


describe("Funcion Super Developer", function(){
    it("Prueba de con edad 22", function(){
        assert.equal("Tamara you are awesome",developer("Tamara",22,"Estudiante","Femenino"));
    });
    it("Prueba con género Masculino", function(){
        assert.equal("Ups!!!",developer("Feder",18,"Estudiante","Masculino"));
    });
    it("Prueba con ocupacion Web Developer", function(){
        assert.equal("Ups!!!",developer("Feder",18,"Web Developer","Masculino"));
    });
});
