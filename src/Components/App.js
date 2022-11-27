import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

export default function App() {  

  const alfabetoInicial = [
    {"valor": "a", "status": false },
    {"valor": "b", "ativo": false },
    {"valor": "c", "ativo": false },
    {"valor": "d", "ativo": false },
    {"valor": "e", "ativo": false },
    {"valor": "f", "ativo": false },
    {"valor": "g", "ativo": false },
    {"valor": "h", "ativo": false },
    {"valor": "i", "ativo": false },
    {"valor": "j", "ativo": false },
    {"valor": "k", "ativo": false },
    {"valor": "l", "ativo": false },
    {"valor": "m", "ativo": false },
    {"valor": "n", "ativo": false },
    {"valor": "o", "ativo": false },
    {"valor": "p", "ativo": false },
    {"valor": "q", "ativo": false },
    {"valor": "r", "ativo": false },
    {"valor": "s", "ativo": false },
    {"valor": "t", "ativo": false },
    {"valor": "u", "ativo": false },
    {"valor": "v", "ativo": false },
    {"valor": "w", "ativo": false },
    {"valor": "x", "ativo": false },
    {"valor": "y", "ativo": false },
    {"valor": "z", "ativo": false },
  ];
  
  const [letraEstado, setLetraEstado] = React.useState("letra-desativada");
  const [letrasClique, setLetrasClique] = React.useState([]); // vai usar no jogo e no letras
  const [input, setInput] = React.useState([]);
  const [inicioJogo, setInicioJogo] = React.useState(false);
  const [chute, setChute] = React.useState("");
  const [palavra, setPalavra] = React.useState('');
  const [statusJogo, setStatusJogo] = React.useState("inicio");
  const [quantidadeErros, setQuantidadeErros] = React.useState(0);  
  const [ alfabeto, setAlfabeto ] = React.useState(alfabetoInicial);
  const [palavraEscondida, setPalavraEscondida] = React.useState([]);  
  const [classePalavra, setClassePalavra] = React.useState('letra-jogo'); 

  return (
   <>
    <Jogo 
    statusJogo = { statusJogo }
    setStatusJogo={setStatusJogo}
    alfabeto = { alfabeto }    
    setPalavra = { setPalavra }
    palavra = {palavra}
    palavraEscondida = { palavraEscondida }
    setPalavraEscondida = { setPalavraEscondida }
    quantidadeErros = {quantidadeErros}
    classePalavra = { classePalavra }
    setQuantidadeErros = {setQuantidadeErros}
    setClassePalavra = {setClassePalavra}
    />

    <Letras 
    statusJogo = { statusJogo }
    letraEstado ={ letraEstado }
    setLetrasClique = { setLetrasClique }
    letrasClique = { letrasClique }
    inicioJogo = { inicioJogo }
    alfabeto = { alfabeto }
    palavra = { palavra }
    palavraEscondida = { palavraEscondida }
    setPalavraEscondida = { setPalavraEscondida }
    quantidadeErros = {quantidadeErros}
    setQuantidadeErros = { setQuantidadeErros}
    setStatusJogo = {setStatusJogo}
    setClassePalavra = { setClassePalavra }
    />
    
    <Chute 
    palavra = { palavra }
    chute={chute}
    alfabeto = { alfabeto }
    setAlfabeto = { setAlfabeto }
    setChute={setChute}
    statusJogo={statusJogo}
    setStatusJogo={setStatusJogo}
    quantidadeErros = {quantidadeErros}
    setQuantidadeErros = { setQuantidadeErros}
    setClassePalavra = { setClassePalavra }
    setPalavraEscondida = { setPalavraEscondida }
    />
   </>
  );
}

