//var nome = " Francisco Tiago";
//var idade = 29; 
//alert(" seja bem vindo!" + nome + " sua idade é " + idade);

//alert(nome.replace("Tiago","Brasil"));

//var lista = ["maça","pera","laranja"];
//var fruta = {nome:"maça",cor :"pao"}	;

//console.log(fruta)	
	
//insere elemento lista.push("uva");
//retira elemento list.pop


//alert(lista[1]);

//ver tamanho da lista console.log (lista.length);	
//trazer ordem contraria console.log(lista.reverse());
//inserir traço na visualização console.log(lista.join("-"));


//CONDICIONAL

//exibe a pergunta para o usuario var idade = prompt("Qual sua idade");

/*var idade = 18;

if(idade < 18){
	alert("menor de idade");

}else{
	alert("menor de idade");
}
*/

/* UTILIZANDO WHILE
var count = 0;
while (count < 6){
	console.log(count);
	count++;
	alert(count);
}
*/

/*UTILIZANDO FOR
var count;

for(count = 1; count <= 5; count++){
	alert(count);
};
*/

/*DATAS
var d = new Date();
alert(d.getMonth()+1);

alert(d.getMinute());
*/

///////////////////////////////////
/*função soma
function soma (n1, n2){
	return n1 + n2;
}
alert (soma(5,2));
*/

/////////////////////////////////////////////
//SetReplace permite a substituição de um trecho de uma string por outro conteúdo.
//function SetReplace(frase, nome, novo_nome){
	//return frase.replace(nome, novo_nome)
//}
//alert(SetReplace("Vai Japão","Japão","Brasil"));


//////////////////////////////////////
//validando idade
/*function validaidade(idade){
	var validar ;
	
	if(idade >= 18){
		validar = true;
	}else{
		validar = false;
	}return validar;
}*/

//var idade = prompt("Qual sua idade");
//console.log(validaidade(idade));


//////////////////////// ADICONA <button type = "button" onclick = "NOME_FUNÇÃO()">Clique Aqui</button>
//function botao(){
	//alert("Obrigado por clicar");
//}



///////////////////////////get element , inserir id para o h3
///RETORNA TEXTO NA PAGINA

//function clicou(){
	//document.getElementById("agradecimento").innerHTML = "<h3>OBRIGADO POR CLICAR<h3>";

	//console.log(document.getElementById("agradecimento"));
//}

/////////////////////////////////////////////LINKS DE REDIRECIONAMENTO

//function redirecionar(){// clicando no clique aqui e depois no texto que aparece , você é redirecionado para uma pagina
	//window.open("https://www.linhadecomando.com/"); // abre em outra aba
	//window.location.href="https://www.linhadecomando.com/"; //abre na mesma aba
//}	


/////////////////////////////////////////////ON MOUSE OVER
//////////// quando passa o mouse muda o texto
function trocar(){

	document.getElementById("mousemove").innerHTML = "<h4>obrigado por passar o mouse</h4>";
	//alert("trocar texto");
}

function voltar(){
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}


////////////////////////////para adicionar mais de um botão 
/*
function trocar(elemento){

	document.getElementById("mousemove").innerHTML = "<h4>obrigado por passar o mouse</h4>";
	adicionarmais de um*
	elemento.innerHTML = "<h4>obrigado por passar o mouse</h4>"
	//alert("trocar texto");
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
} 
e tambem adiciona mais um botao 

*/

///ON LOAD QUANDO CARREGAR O BODY CHAMA FUNÇÃO O MESMO PODE SER INSERIDO NA TAG DO BODY
