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
      operaciones:[],
  };


let getData =  () => {
  desc = document.getElementById("desc").value;//esto n hace nada por ahora
 
 

  let userInput = parseInt(document.getElementById("userInput").value) ;
  let select = document.getElementById("selectOption");
  if (select.value==='Ingresos') {
    data.ingresos.push(userInput)
    data.operaciones.push(userInput)
    let suma = data.operaciones.reduce(function(total,num){
      return total + num;
    });
    console.log(suma);
    document.getElementById("outputText").innerHTML = suma.toLocaleString();
  }
  if (select.value==='Egresos'){
    data.egresos.push(userInput)
    data.operaciones.push(userInput)
    let resta = data.operaciones.reduce(function(total,num){
      return total - num;
    });
    console.log(resta);
    document.getElementById("outputText").innerHTML = resta.toLocaleString();
  }
  console.log(data);

}



