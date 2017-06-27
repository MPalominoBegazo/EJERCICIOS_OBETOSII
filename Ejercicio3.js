var assert = require("assert");

function  propiedadObjetos (arr){
  var longitud = arr.length;
  var cadena = "";
  var texto= { //OBJETO LITERAL
    propiedad : function (){
        for (var i in arr){
          
        }

    }
  }
  return texto.metodo();

  var resultado = "";
  for (var i in texto) {
    if (texto.hasOwnProperty(i)) {
        resultado += propiedad + "." + i + " = " + texto[i] + "\n";
    }
  }
  return resultado;
}


describe("Funcion Texto", function(){
    it("Prueba de [6,5,4,3,2,1]", function(){
        assert.equal("Propiedad1 -->6,Propiedad1 -->5,Propiedad1 -->4,Propiedad1 -->3,Propiedad1 -->2,Propiedad1 -->1,",propiedadObjetos([6,5,4,3,2,1]));
    });
});
