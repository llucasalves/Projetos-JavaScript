/*document.write("lucas alves "); write imprenssao na tela
aspas duplos representa uma string, sem aspas esta passando numero inteiro 

variaveis----------------------------------------------
let lebre="lucas";
let dore= 2017
curso="Java"; exemplo diferente de criar variavel 
document.write(lebre + dore );

let soma= 2555
let soma1= 5569

document.write(soma*soma1)*/

/*constantes-----------------------------------------------
const canal= "lucas godoi";
document.write(canal);
não pode ter seu valor alterado, diferente de let e var
*/

/* sobre alert em javascript------------------------------ 

let canal = "Lucas godoi";
let curso = "Aprender javascript";

alert(canal + curso);
alert("Seja Bem Vindo");*/

/* prompt sobre javascript--------------------------- */

/*let x = 5+5;
let y = "5" + 5;
let z = "Heloo"+5;

let l = 6<7;

let p = 16 + "Volvo";*/

/*const cars = ["Saab","Volvo","BMW", "Porche", "Audi"];
document.getElementById('demo').innerHTML = cars[4]*/


//document.write(x,"<br>", y, "<br>", z, "<br>")

//document.write(p);

let segundos = 0;
let hora= 0;
let minutos = 0;
let interval;

function doisDigitos(digito){
	if(digito <10){
		return('0'+ digito)
	} else{
		return(digito)
	}
}

function iniciar(){
	interval = setInterval(watch,1000)
}

function pausar(){
	clearInterval(interval)

}

function zerar(){
	clearInterval(interval)
	segundos = 0;
	minutos = 0;
	hora =0;
	document.getElementById('tempo').innerHTML= "00:00:00";
}


function watch(){
	segundos++
	if(segundos==60){
		minutos++
		segundos=0
		if(minutos==60){
			minutos=0
			hora++
		}
	}
	document.getElementById('tempo').innerHTML=doisDigitos(hora)+ ":" +doisDigitos(minutos)+ ":" +doisDigitos(segundos);
}

