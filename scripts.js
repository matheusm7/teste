/*  Display the current day and time in the following format: Today is Tuesday and Current time is 10 PM:30:38 */
var dt = new Date();
var diasem = dt.getDay();
var dia = dt.getDate();
var mes = dt.getMonth();
var ano = dt.getFullYear();

var horas = dt.getHours();
var minutos = dt.getMinutes();
var segundos = dt.getSeconds();

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-feira", "Quinta-Feira", "Sexta-Feira", "Sábado")

confirm(semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano + " e agora são " + horas + ":" + minutos + ":" + segundos);

/*  Create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1 */

let Numero1 = window.prompt('Digite um número');
let Numero2 = window.prompt('Digite outro numero');

if (Numero1 >= 1 && Numero2 >= 1) {
    alert(`A alternância dos numeros é igual a ${Numero2}${Numero1}`)
}

else if (Numero1 < 1 || Numero2 < 1) {
    alert("Os numeros dever ser maiores ou igual a 1");
    Numero1 = window.prompt('Digite um número');
    Numero2 = window.prompt('Digite outro numero');
}

/* Write a JavaScript function that reverse a number */

alert(Number(String(prompt('Digite um número com 2 algarismos')).split('').reverse().join('')) || "Deve digitar um número")

/*Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified 
letter within the string*/

function countText() {
  let text = document.form_main.text.value;
  document.getElementById('characters').innerText = text.length;
  document.getElementById('words').innerText = text.length == 0 ? 0 : text.split(/\s+/).length;
  document.getElementById('rows').innerText = text.length == 0 ? 0 : text.split(/\n/).length;
}


/* Display an alert box to show the result Sample numbers : 0, -1, 4 Output : 4, 0, -1  */

const resultado = window.prompt("insira os valores");

alert(resultado.split('').reverse())

/*Display an alert box to show the result Sample numbers : 0, -1, 4 Output : 4, 0, -1 */

function verifica(){
  var num = document.getElementById("numero").value;
  var int_num = Number(num);

    if(int_num%2 == 0)
  {
    alert("par");
  } else{
    alert("impar");
  }
}


/* Write a JavaScript function to calculate the sum of values in an array */

var number0001 = prompt("Digite um numero para fazer a adição");
var number0002 = prompt("Digite outro numero para fazer a adição");

function adicaotodos() {
   var result01 = parseInt(number0001) + parseInt(number0002)
   alert(`O resultado é igual a ${result01}`)
};

adicaotodos()