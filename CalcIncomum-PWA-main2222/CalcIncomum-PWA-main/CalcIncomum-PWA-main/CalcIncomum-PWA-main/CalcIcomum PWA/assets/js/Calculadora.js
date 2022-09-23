function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}








/*
var soma = document.getElementById('soma')
var subtrai = document.getElementById('subtracao')
var igual = document.getElementById('igual')
var apagar = document.getElementById('apagarUltimo')
var limpa = document.getElementById('apagarTudo')
var input = document.getElementById('tela')

var Um = document.getElementById('um')
var Dois = document.getElementById('dois')
var Tres = document.getElementById('tres')
var Quatro = document.getElementById('quatro')
var Cinco = document.getElementById('cinco')
var Seis = document.getElementById('seis')
var Sete = document.getElementById('sete')
var Oito = document.getElementById('oito')
var Nove = document.getElementById('nove')
var Zero = document.getElementById('zero')

var num = 0;






Um.addEventListener('click', function(){
   num = num + 1

   if (num > 0) {
       input.value = '1'

   } else if (num <= 0) {
       num = num-1
       input.value = '-1'
   }
})
*/

/*
function maisUm(){
    num = num+1;
}
function maisDois(){
    num = num+2;
}
function maisTres(){
    num = num+3;
}
function maisQuatro(){
    num = num+4;
}
function maisCinco(){
    num = num+5;
}
function maisSeis(){
    num = num+6;
}
function maisSete(){
    num = num+7;
}
function maisOito(){
    num = num+8;
}
function maisNove(){
    num = num+9;
}
function maisZero() {
    num = num + 0;
}
function seeResult(){
    document.write(num);
}

*/