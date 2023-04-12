export default {
    
    fragshow(){
        document.querySelector("#colectData").insertAdjacentHTML("beforeend",`<div class="w-50 d-flex mt-3 ">
                <form id="formulario" class="d-flex" onsubmit="agregarDato(event)">
                    <div>
                        <select name="maso" id="selectOption" class="inputs py-1 mx-1 border " >
                            <option value="">Select</option>
                            
                            <option value="Ingresos" id="ingresos">Ingresos</option>
                            <option value="Egresos" id="egresos">Egresos</option>
                        </select>
                    </div>
                    <div class="w-100 mx-3" >
                        <input type="text" id="desc" name="des" placeholder="Add the description" class="w-100 py-1 form-control inputs">
                    </div>
                    <div class="input-group mb-3 w-25 inputs">
                        <input type="number" id="userInput"  class="form-control w-25 " placeholder="Number" aria-label="Amount (to the nearest dollar)">
                    </div>
                    <div class="w-25 mx-1">      
                        <button onclick="getData()" type="submit" class=" bg-light border-0 w-100"><svg xmlns="http://www.w3.org/2000/svg"  class="w-25 inputss " viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg></button>
                    </div>
                 </form>
            </div>`
    )}
}