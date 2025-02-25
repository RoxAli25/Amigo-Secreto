let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Por favor, ingrese un nombre válido y que no esté repetido.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para realizar el sorteo.");
        return;
    }
    
    let copiaAmigos = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoAsignado;
        do {
            amigoAsignado = copiaAmigos[Math.floor(Math.random() * copiaAmigos.length)];
        } while (amigoAsignado === amigos[i]);
        
        resultado.push(`${amigos[i]} → ${amigoAsignado}`);
        copiaAmigos = copiaAmigos.filter(a => a !== amigoAsignado);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = pair;
        listaResultado.appendChild(li);
    });
}
