import React from "react";
import { useState } from "react";
import { palavras } from '../palavras.js';
// 1 antes de clicar o botao as letras e input tem que estar desativadas
  // 2 apos clicar botao letras e input ativam
   // 3embaralham palavras e puxam do palavras.js uma palavra 
  // conta-se as letras e passam pro letra-jogo distribuindo o numero de letras (contam o array de letras via map?)
export default function Jogo(props) {
    
    const [palavraEscondida, setPalavraEscondida] = useState([]);
    // let traco = [];

function escondePalavra(palavras){
    let palavraEscondida = palavras.split('');
    let numChar = palavraEscondida.length;
    let palavraArray = Array(numChar).fill("_");
    setPalavraEscondida(palavraArray);
    // setPalavraEscondida(palavraEscondida.join(''));
    console.log(palavraEscondida); 
    // setPalavraEscondida(traco);
}


function escolhePalavra() {
  
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];  // a palavra ta aqui
    console.log(novaPalavra);
    escondePalavra(novaPalavra); // o array ta aqui
    

  
}
    return (
       
        <div class="container">

            <div class="forca"> 
                <img src="img/forca0.png" alt="" />
            </div>

            <div class="escolha">
                <div class="escolher-palavra" onClick={escolhePalavra}> <p>Escolher Palavra</p> </div>
                <div class="palavra-jogo">
                    <div class="letra-jogo">
                     <strong>{palavraEscondida.join(' ')}</strong>
                    </div>
               
                    
                    
                </div>
            </div>
        </div>
      
    );
}