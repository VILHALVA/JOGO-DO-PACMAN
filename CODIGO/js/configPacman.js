var Cenario = function(){

}

Cenario.vazio = 0;
Cenario.parede = 1;
Cenario.poder = 2;
Cenario.ghost = 3;
Cenario.pacman = 4
Cenario.ponto = 5;

Cenario.mapa = null;

var largura = 30;

var intervalo = 200;

//direcoes
var Direcao = function(){
}
Direcao.naoDefinida = -1;

Direcao.cima = 0;
Direcao.baixo = 1;
Direcao.esquerda = 2;
Direcao.direita = 3;

var Teclas = function(){
}
Teclas.cima = 38;
Teclas.baixo = 40;
Teclas.esquerda = 37;
Teclas.direita = 39;
