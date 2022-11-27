import React from "react";
import { palavras } from '../palavras.js';

export default function Jogo(props) {             

    const { statusJogo, setStatusJogo, alfabeto, classePalavra, setPalavra, palavraEscondida, setPalavraEscondida, quantidadeErros, palavra } = props    

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
       
        <div className="container">           
            
            <div className="forca"> 
                <img src={`img/forca${quantidadeErros}.png`} alt="forca-imagem" data-test="game-image"/>
            </div>

            <div className="escolha">
                <button className="escolher-palavra" disabled = { statusJogo !== 'inicio' } onClick={ iniciarJogo } data-test="choose-word"> <p>Escolher Palavra</p> </button>
                <div className="palavra-jogo">
                    <div className={ classePalavra } data-test="word" data-answer={palavra}>
                     { palavraEscondida }
                    </div>
                </div>
            </div>
        </div>
      
    );
}