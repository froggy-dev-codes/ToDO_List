// capturamos valores
let textoInput = document.getElementById("textoInput");

let botonAgregar = document.getElementById("botonInput");

let tareas = document.getElementById("tareas");

// creamos variable que me guarda el valor
let valor;

// listener del input
botonAgregar.addEventListener("click", (e) => {
    let contenedorPrincipal = document.createElement("div");
    contenedorPrincipal.className = "contenedor";

    let contenedorParrafo = document.createElement("div");
    contenedorParrafo.className = "contenedorParrafo";

    let contenedorBotones = document.createElement("div");
    contenedorBotones.className = "contenedorBotones";

    let parrafo = document.createElement("p");
    valor = textoInput.value
    parrafo.textContent = valor;
    contenedorParrafo.appendChild(parrafo);

    let check = document.createElement("button");
    let eliminar = document.createElement("button");
    check.textContent = "✔";
    check.className = "check";


    eliminar.textContent = "❌";
    eliminar.className = "eliminar";

    contenedorBotones.append(check, eliminar);
    contenedorPrincipal.append(contenedorParrafo, contenedorBotones);

    tareas.appendChild(contenedorPrincipal);
    textoInput.value = "";


    // eventos al botoncheck
    check.addEventListener("click", ()=>{
        parrafo.classList.toggle("tachado"); 
    })

    // evento eliminar
    eliminar.addEventListener("click", (e)=> {
        let conte = eliminar.parentElement.parentElement;
        conte.remove();
    })
})

