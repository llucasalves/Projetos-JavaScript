/*let acende = document.getElementById('imagem');

function lampada(){
    if(acende.src.match("desligada")){
        acende.src="https://arduinolivre.files.wordpress.com/2013/08/lampada_ligada.png";
    }else{
        acende.src="https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png";
    }

}*/



function liga(){
    document.getElementById('imagem').src = "https://arduinolivre.files.wordpress.com/2013/08/lampada_ligada.png";
}

function desliga(){
    document.getElementById('imagem').src ="https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png";
}


