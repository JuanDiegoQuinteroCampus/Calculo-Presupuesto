export default {
    h2: "Presupuesto disponible",
    h1: "$",
    ingresos: {
        mas: "INGRESOS",
        saldo: "$"
    },
    egresos: {
        menos: "EGRESOS",
        saldo: "$",
        porcentaje: "NaN%"
    },
    fragshow(){
        document.querySelector("#encabezado").insertAdjacentHTML("beforeend",`
        <div class=" text-center mb-3">
                
        <h5>Presupuesto Disponible</h5>
        <p class="fs-1 ">$ <span id="outputText"></span></p> 
        
    </div>    
    <div class="  justify-content-center d-flex  ">
        <div class="w-100  align-items-center  d-flex flex-column ">
            <div class=" d-flex justify-content-around  w-25 bg-secondary pt-3 mt-3">
                <p>
                    INGRESOS 
                </p>
                <p>$<span id="outIngreso"></span></p>
            </div>
            <div class="d-flex justify-content-around w-25 bg-dark pt-3 mt-3">
                <p>
                    EGRESOS
                </p>
                <p>$<span id="outEgreso"></span></p>
            </div>
        </div>
    </div>`
        )
}}