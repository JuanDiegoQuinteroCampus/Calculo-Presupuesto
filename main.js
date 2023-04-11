/* import mydatos from "./components/datos.js"; */

/* mydatos. */
/* import config from "./config.js"; */


/* let ingresos = 0;
let egresos = 0; 
let total = 0;
let select = [];
  let desc = [];
  let userInput = []; */
  /* let data = []; */

  let data = {
    ingresos:[],
    egresos: [],
  };
  
  let lastOperation = 0;
  
  let getData = () => {

    let userInput = parseInt(document.getElementById("userInput").value);
    let select = document.getElementById("selectOption");
    
    if (select.value === 'Ingresos') {
      data.ingresos.push(userInput)
      lastOperation = userInput;
      let suma = data.ingresos.reduce(function(total,num){
        return total + num;
      });
      let resultado = suma - data.egresos.reduce(function(total,num){
        return total + num;
      }, 0);
      console.log(resultado);
      document.getElementById("outputText").innerHTML = resultado.toLocaleString();
    }
    if (select.value === 'Egresos') {
      data.egresos.push(userInput)
      lastOperation = -userInput;
      let resta = data.egresos.reduce(function(total,num){
        return total + num;
      });
      let resultado = data.ingresos.reduce(function(total,num){
        return total + num;
      }, 0) - resta;
      console.log(resultado);
      document.getElementById("outputText").innerHTML = resultado.toLocaleString();
    }
    console.log(data);
  }
  



