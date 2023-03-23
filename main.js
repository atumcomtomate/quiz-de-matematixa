var Jogador_1;
var Jogador_2;

function Logar(){
    Jogador_1 = document.getElementById("Nome_jogador_1").value;
    Jogador_2 = document.getElementById("Nome_jogador_2").value;

    localStorage.setItem("jogador1", Jogador_1);
    localStorage.setItem("jogador2", Jogador_2);

    window.location="Quiz_Virtual/index2.html";
}