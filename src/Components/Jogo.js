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
    
    const [classePalavra, setClassePalavra] = React.useState('letra-jogo'); // usado para mudar a classe no clique (provavelmente usarei no clique no letras)
 

    const {letrasClique, setLetrasClique, erro, setErros, setStatusJogo, setChute} = props
    // const [desabilitado, setDesabilitado] = React.useState(true); // desabilitar o jogo
    function erroPalavraLetra(){
 // funcao para linkar erro com as imagens da forca
    }

  

function escondePalavra(palavras){
    let palavraEscondida = palavras.split('');
    let quantasLetras = palavraEscondida.length;
    let palavraArray = Array(quantasLetras).fill("_");
    setPalavraEscondida(palavraArray);
    
    console.log(palavraEscondida); 
    
   
    
    
}


function escolhePalavra() {
    setStatusJogo("jogando")
    setLetrasClique("")
    setErros(0)
    setChute("")
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];  // a palavra ta aqui
    console.log(novaPalavra);
    escondePalavra(novaPalavra); // o array ta aqui
    // setClassePalavra('letra-jogo');
   

  
}
    return (
       
        <div class="container">

            <div class="forca"> 
                <img src={`img/forca${erro}.png`} alt="" />
            </div>

            <div class="escolha">
                <div class="escolher-palavra" onClick={escolhePalavra}> <p>Escolher Palavra</p> </div>
                <div class="palavra-jogo">
                    <div class={classePalavra} >
                     {palavraEscondida.join(' ')}
                     
                    </div>
               
                    
                    
                </div>
            </div>
        </div>
      
    );
}