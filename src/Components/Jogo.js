import React from "react";
import { useState } from "react";
import { palavras } from '../palavras.js';
// 1 antes de clicar o botao as letras e input tem que estar desativadas
  // 2 apos clicar botao letras e input ativam
   // 3embaralham palavras e puxam do palavras.js uma palavra ok
  // conta-se as letras e passam pro letra-jogo distribuindo o numero de letras (contam o array de letras via map?) ok
  // associar letras palavraEscondida - checar se existe em cada tentativa
  // se existe - completa linha
  // se nao existe - erro forca
export default function Jogo(props) {
    
    const [palavraEscondida, setPalavraEscondida] = useState([]);
    
    const inicioForca = 0;
    const [forcaImagem, setForcaImagem] = useState(inicioForca) //para inserir imagem da forca conforme erros

    function erroPalavraLetra(){

    }

function escondePalavra(palavras){
    let palavraEscondida = palavras.split('');
    let quantasLetras = palavraEscondida.length;
    let palavraArray = Array(quantasLetras).fill("_");
    setPalavraEscondida(palavraArray);
    
    console.log(palavraEscondida); 
    
}


function escolhePalavra() {
  
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];  // a palavra ta aqui
    console.log(novaPalavra);
    escondePalavra(novaPalavra); // o array ta aqui
    

  
}
    return (
       
        <div class="container">

            <div class="forca"> 
                <img src={`img/forca${forcaImagem}.png`} alt="" />
            </div>

            <div class="escolha">
                <div class="escolher-palavra" onClick={escolhePalavra}> <p>Escolher Palavra</p> </div>
                <div class="palavra-jogo">
                    <div class="letra-jogo">
                     {palavraEscondida.join(' ')}
                     
                    </div>
               
                    
                    
                </div>
            </div>
        </div>
      
    );
}