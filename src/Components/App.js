import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

export default function App() {
  const [letraEstado, setLetraEstado] = React.useState("letra-desativada");
  const [letrasClique, setLetrasClique] = React.useState([]); // vai usar no jogo e no letras
  const [input, setInput] = React.useState([]);
  const [inicioJogo, setInicioJogo] = React.useState(false);
  const [chute, setChute] = React.useState("");
  const [palavra,setPalavra] = React.useState([])
  const [statusJogo, setStatusJogo] = React.useState("nao");
  const [erro, setErros] = React.useState(0);

  return (
   <>
    <Jogo 
    input={input}
    setInput={setInput}
    setLetrasClique={setLetrasClique}
    inicioJogo={inicioJogo}  
    letraEstado={letraEstado}
    setLetraEstado={setLetraEstado}
    erro={erro}
    setErros={setErros}
    setStatusJogo={setStatusJogo}
    setChute={setChute}
   

    />
    <Letras 
    letraEstado ={letraEstado}
    setLetrasClique={setLetrasClique}
    letrasClique={letrasClique}
    inicioJogo={inicioJogo}
    />
    <Chute 
    chute={chute}
    setChute={setChute}
    statusJogo={statusJogo}
    setStatusJogo={setStatusJogo}
    erro={erro}
    setErros={setErros}
    />
   </>
  );
}

