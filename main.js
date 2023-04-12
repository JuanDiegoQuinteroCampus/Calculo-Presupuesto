/* import mydatos from "./components/datos.js"; */

/* mydatos. */
/* import config from "./config.js"; */


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
      document.getElementById("outIngreso").innerHTML = suma.toLocaleString();
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
      document.getElementById("outEgreso").innerHTML = resta.toLocaleString();
    }
    console.log(data);
  }


  function agregarDato(event) {
    event.preventDefault(); // Previene que se recargue la página
    
    // Obtiene los valores ingresados ​​en el formulario
    const option = document.getElementById("selectOption").value;
    const desc = document.getElementById("desc").value;
    const userInput = document.getElementById("userInput").value;
    
    // Crea una nueva fila en la tabla con los datos ingresados
    const nuevaFila = `
      <tr>
        <td class="d-flex justify-content-around bg-light px-3 border">
          <p><span>${desc}</span></p>
          <p class="${option === 'Ingresos' ? 'text-success' : 'text-danger'}">${option === 'Ingresos' ? '$+' : '$-'}<span>${userInput}</span></p>
        </td>
      </tr>
    `;
  
    // Agrega la nueva fila a la tabla correspondiente
    if (option === 'Ingresos') {
      const tablaDatos = document.getElementById("tabla-datos");
      tablaDatos.insertAdjacentHTML("beforeend", nuevaFila);
    } else if (option === 'Egresos') {
      const tablaDatos = document.getElementById("tabla-datos2");
      tablaDatos.insertAdjacentHTML("beforeend", nuevaFila);
    }
  
    // Limpia los valores del formulario
    document.getElementById("selectOption").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("userInput").value = "";
  }
  
  // Agrega un listener al formulario para capturar el evento submit y llamar a la función agregarDato()
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", agregarDato);
  

  