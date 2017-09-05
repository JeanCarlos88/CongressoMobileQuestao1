/*
	TESTE ARRAY
	Autor: Jean Carlos da Silva Dias
	
*/

function lerArray(){

	var testeArray = [10, 3, 22, 6, 18, 11, 45, 7, 9];

	var menor = Math.min.apply(null, testeArray);
	var maior = Math.max.apply(null, testeArray);

	alert("Tamanho do Array: " + testeArray.length
		+ "\nMenor Número:  " + menor +
		"\nMaior Número:  "	+ maior
		);

}



