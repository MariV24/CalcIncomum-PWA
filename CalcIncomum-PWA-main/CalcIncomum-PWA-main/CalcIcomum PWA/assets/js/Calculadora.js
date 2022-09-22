var soma = document.getElementById('soma')
var subtrai = document.getElementById('subtracao')
var igual = document.getElementById('igual')
var apagar = document.getElementById('apagarUltimo')
var limpa = document.getElementById('apagarTudo')

let Um = document.getElementById('um')
let Dois = document.getElementById('dois')
let Tres = document.getElementById('tres')
let Quatro = document.getElementById('quatro')
let Cinco = document.getElementById('cinco')
let Seis = document.getElementById('seis')
let Sete = document.getElementById('sete')
let Oito = document.getElementById('oito')
let Nove = document.getElementById('nove')
let Zero = document.getElementById('zero')

var num = 0;

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

