
var musics = document.getElementById("pagina");
var rotateee = document.getElementById("paginex");



function rotatee(){
    rotateee.classList.toggle("rotate");
}


function abrir_musicas(){

    musics.classList.toggle("exibir");

}
function abrir_musicas2(){
    musics.classList.toggle("exibir2");
}
function abrir_musicas3(){
    musics.classList.toggle("exibir3");
}
function abrir_musicas4(){
    musics.classList.toggle("exibir4");
}




function chamar_pagina(pagina){
    musics.innerHTML = pagina;
}