function limpar(){
    document.getElementById("visor").innerHTML = "0";
}

function removeZero(){
    let value = document.getElementById("visor").innerHTML;

    if (value ==0){
        value = ""
        document.getElementById("visor").innerHTML = value;
    }
}

function calcular(myValue){

    removeZero()
    document.getElementById("visor").innerHTML += myValue;
}

function igualar(){
    removeZero()

    let equacao = document.getElementById("visor").innerHTML;

    let igualar = eval(equacao);

    document.getElementById("visor").innerHTML=igualar;
}