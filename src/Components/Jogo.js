import React from "react";
import { palavras } from '../palavras.js';
// 1 antes de clicar o botao as letras e input tem que estar desativadas
  // 2 apos clicar botao letras e input ativam
   // 3embaralham palavras e puxam do palavras.js uma palavra ok
  // conta-se as letras e passam pro letra-jogo distribuindo o numero de letras (contam o array de letras via map?) ok
  // associar letras palavraEscondida - checar se existe em cada tentativa
  // se existe - completa linha
  // se nao existe - erro forca
export default function Jogo(props) {             

    const { statusJogo, setStatusJogo, alfabeto, classePalavra, setPalavra, palavraEscondida, setPalavraEscondida, quantidadeErros } = props    

    function escondePalavra(palavra){
        
        let palavraEscondida = palavra.split('');
        let quantasLetras = palavraEscondida.length;
        let palavraArray = Array(quantasLetras).fill("_ ");

        setPalavraEscondida(palavraArray);
    }

    

    function iniciarJogo(){
        console.log('iniciou o jogo');
        setStatusJogo("jogando");

        if(statusJogo !== "jogando"){
            const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)]; 
            console.log(novaPalavra);
            setPalavra(novaPalavra);
            escondePalavra(novaPalavra);            

            alfabeto.map((letra) => letra.ativo = true);
        }        
    }   

    return (
       
        <div class="container">           
            
            <div class="forca"> 
                <img src={`img/forca${quantidadeErros}.png`} alt="" />
            </div>

            <div class="escolha">
                <button class="escolher-palavra" disabled = { statusJogo !== 'inicio' } onClick={ iniciarJogo } > <p>Escolher Palavra</p> </button>
                <div class="palavra-jogo">
                    <div class={ classePalavra } >
                     { palavraEscondida }
                    </div>
                </div>
            </div>
        </div>
      
    );
}