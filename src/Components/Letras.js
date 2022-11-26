import React from "react";
export default function Letras(props) {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const {letrasClique, setLetrasClique, setStatusJogo, setChute} = props;

    
    function jogada(index){ // acha pelo index do array
    console.log(index); 

    const arrayChutes = [...letrasClique,index]
    setLetrasClique(arrayChutes)
    console.log('array Chutes ' + arrayChutes)

    }

  

  
    return (
        <div class="letras">
            {alfabeto.map((letra,index) => (
            <button
                className = {`letra `} //condition(true) ? valor1 : valor2 se o jogo começou(true) enabled : disabled {!inicioJogo() ? disabled : letra}
              
                key = {index} // sintaxe  ` ${terminadas.includes(tarefa) ? "finaliza" : ""}`
                onClick={() =>{jogada(index)}}
                >
                <p>{letra}</p>
                
            </button>

            ))}
           
        </div>
    
    );
}