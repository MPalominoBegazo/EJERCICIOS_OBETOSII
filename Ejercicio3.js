var assert = require("assert");

function ArregloObjt (){

  this.cadenas = ""; 
  this.cadena = "Propiedad";
  cont = 1;
  this.metodo = function(arr){
    for (var i=0; i<arr.length ; i++){
     this.numero = arr[i];
     this.cadenas += this.cadena + " " + cont + " --> " + this.numero + ";";
      cont++;
    }
    return this.cadenas;
  }

}

function arreglos(arr){
  var arreglo = new ArregloObjt();
  return arreglo.metodo(arr);
}


describe("Funcion Texto", function(){
    it("Prueba de [6,5,4,3,2,1]", function(){
        assert.equal("Propiedad 1 --> 6;Propiedad 2 --> 5;Propiedad 3 --> 4;Propiedad 4 --> 3;Propiedad 5 --> 2;Propiedad 6 --> 1;",arreglos([6,5,4,3,2,1]));
    });
    it("Prueba de [6,5,4,3]", function(){
        assert.equal("Propiedad 1 --> 6;Propiedad 2 --> 5;Propiedad 3 --> 4;Propiedad 4 --> 3;",arreglos([6,5,4,3]));
    });
});


