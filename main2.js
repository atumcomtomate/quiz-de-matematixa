var Jogador_1 =localStorage.getItem("jogador1");
var Jogador_2 =localStorage.getItem("jogador2");
var Pontos_1=0;
var Pontos_2=0;
var resposta;

document.getElementById("player1Name").innerHTML =Jogador_1+": ";
document.getElementById("player2Name").innerHTML =Jogador_2+": ";
document.getElementById("player1Score").innerHTML =Pontos_1;
document.getElementById("player2Score").innerHTML =Pontos_2;
document.getElementById("playerQuestion").innerHTML ="Turno da pergunta: "+Jogador_1;
document.getElementById("playerAnswer").innerHTML ="Turno de resposta: "+Jogador_2;

function Enviar(){
    var numero1=document.getElementById("number_1").value;
    var numero2=document.getElementById("number_2").value;
    resposta =parseInt(numero1)*parseInt(numero2);
    console.log(resposta);


    var resposta_da_pergunta="<h3 id='wordDisplay'>Resposta: "+parseInt(numero1)+"X"+parseInt(numero2)+"</h3>";
    var numero_da_resposta="<br><span>Resposta: </span><input type='text'id='inputCheckBox'>";
    var botao="<br><br><button class='btn btn-danger'onclick='Checar()' id='checar'>Enviar resposta</button>";
    var caixa=resposta_da_pergunta+numero_da_resposta+botao;
    document.getElementById("output").innerHTML=caixa;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}
var turno_da_pergunta ="Jogador_1";
var turno_da_resposta ="Jogador_2";

function Checar(){
    var resposta_jogador=document.getElementById("inputCheckBox").value;

    if(resposta_jogador==resposta){
        if(turno_da_resposta=="Jogador_1"){
            Pontos_1=Pontos_1+1;
            document.getElementById("player1Score").innerHTML=Pontos_1;
        }
        else{
            Pontos_2=Pontos_2+1;
            document.getElementById("player2Score").innerHTML=Pontos_2;
        }
    }
        if(turno_da_pergunta=="Jogador_1"){
            turno_da_pergunta="Jogador_2";
            document.getElementById("playerQuestion").innerHTML="Turno da pergunta: "+Jogador_2;
        }
        else{
            turno_da_pergunta="Jogador_1";
            document.getElementById("playerQuestion").innerHTML="Turno da pergunta: "+Jogador_1;
        }
        if(turno_da_resposta=="jogador_1"){
            turno_da_resposta="jogador_2";
            document.getElementById("playerAnswer").innerHTML="Turno da resposta: "+Jogador_2;
        }
        else{
            turno_da_resposta="Jogador_1";
            document.getElementById("playerAnswer").innerHTML="Turno da resposta: "+Jogador_1;
        }
        document.getElementById("wordDisplay").innerHTML="Resposta: ";
        document.getElementById("inputCheckBox").value="";
        document.getElementById("checar").style.display="none";
}