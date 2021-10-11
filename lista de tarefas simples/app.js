// variaveis 
let escrever = document.getElementById('tarefa');



// adcionar as tarefas na lista
function incluirTarefa(){
    let elemento = document.createElement("p");
    let escreverTexto = document.createTextNode(escrever.value);

    elemento.appendChild(escreverTexto);

    document.querySelector(".topicos").appendChild(elemento);
}

// limpar todas as tarefas da lista
function apagarTarefa(){
    document.querySelector(".topicos").innerHTML = "";

}