// document.getElementById('botao').innerText = "Mudei o Valor"
// console.log(document.getElementsByClassName('fieldset'))
// console.log(document.getElementsByTagName('legend'))
// console.log(document.getElementsByName('inputPeso'))

function mensagem() {
    let nome = prompt("Qual o seu nome?");
    alert(nome);
}

function calcular() {
    
    if (validaCampos()) {
        let peso   = parseFloat(document.getElementById('peso').value)
        let altura = parseFloat(document.getElementById('altura').value)
        let resultadoImc = (peso / (altura * altura)) * 10000;    
        document.getElementById('ResultadoTexto').innerText =  'Resultado: ';
        document.getElementById('resultado').innerText = resultadoImc.toFixed(1);
        classificaImc(); // chamada da função
    } else {
        document.getElementById('resultado').innerText =  'Valores incorretos';    
    }
    
}

function validaCampos() {
    let peso   = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    if (isNaN(peso) || isNaN(altura)) {
        return false;
    }
    return true;
}

function validaTamanhoInput() {
    setTimeout(() => {
        let campoInputPeso = document.getElementById('peso')
        if (campoInputPeso.value.length > 3 ) {
            document.getElementById('erroInputPeso').style.display = 'block'
        } else {
            console.log(campoInputPeso.value.length);
            document.getElementById('erroInputPeso').style.display = 'none'   
        }        
    }, 100);
   
    
}

function classificaImc() {
    let resultado = parseFloat(document.getElementById('resultado').innerText);
    const tagIMG = document.getElementById('imgResultado')

    console.log(resultado)
    if (resultado <= 18.5) {
        tagIMG.src= "imgs-imc/magreza.png"
    } else if (resultado > 18.5 &&  resultado < 24.9) {
        tagIMG.src= "imgs-imc/normal.png"
    } else if (resultado > 25.0 && resultado < 29.9){
        tagIMG.src= "imgs-imc/sobrepeso.png"
    } else if (resultado > 30.0 && resultado < 34.9){
        tagIMG.src= "imgs-imc/grau1.png"
    } else if (resultado > 35.0 && resultado < 39.9){
        tagIMG.src= "imgs-imc/grau2.png"
    } else if (resultado > 40.0){
        tagIMG.src= "imgs-imc/grau3.png"
    }

}