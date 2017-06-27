var assert = require("assert");

//EJERCICIO 1
function suma(numInicial, numFinal){ //FUNCION
  var miObjeto = { //OBJETO LITERAL
      inicio: numInicial,
      fin: numFinal,
      metodoSuma: function(){
        var suma =0;
        if(!isNaN(this.inicio) && !isNaN(this.fin) ){  
          for (var i=this.inicio; i<=this.fin; i++){
              suma +=i;
              
          }
          return suma;
        }
        else{
            return suma = this.inicio;     
        }
        
      }
  }
  return (miObjeto.metodoSuma());
}

describe("Funcion Suma", function(){
    it("Prueba de 1 y 10", function(){
        assert.equal(55,suma(1,10));
    });
    it("Prueba con un valor", function(){
        assert.equal(10,suma(10));
    });
});
