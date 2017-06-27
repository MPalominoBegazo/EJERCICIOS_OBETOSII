var assert = require("assert");

//EJERCICIO 1
function suma(numInicial, numFinal){ //FUNCION
  var miObjeto = { //OBJETO LITERAL
      inicio: numInicial,
      fin: numFinal,
      metodoSuma: function(){
        var suma =0;
        for (var i=this.inicio; i<=this.fin; i++){
           suma +=i;

        }
        return suma;
      }
  }
  return (miObjeto.metodoSuma());
}

describe("Funcion Suma", function(){
    it("Prueba de 1 y 10", function(){
        assert.equal(55,suma(1,10));
    });
});


/*function Sumaobjeto(numInicial, numFinal){
     this.inicio = numInicial,
     this.fin = numFinal,
     this.calcularSuma = function(){ //METODO
       var suma =0;
       for (var i=this.inicio; i<=this.fin; i++){
          suma +=i;

       }
       return suma;
     }
}


function suma(numInicial, numFinal){
  var objtSuma = new Sumaobjeto(numInicial, numFinal); // CREANDO OBJETO
  return objtSuma.calcularSuma();
}
//PRUEBAS UNITARIAS
describe("Funcion Suma", function(){
    it("Prueba de 1 y 10", function(){
        assert.equal(55,suma(1,10));
    });
  });
    */
