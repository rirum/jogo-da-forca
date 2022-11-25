import { useState } from "react";
export default function Chute(){
const [textoInput, setTextoInput] = useState("") //salvar o que está no input 

function salvaTexto(event){
console.log(setTextoInput(event.target.value)) //input controlado para poder usar na lista/mostrar pro user
}
 //value embaixo = saber que tem q zerar futuramente (aula quinta)
    return (

        <div class="chute"> 
            <p>Já sei a palavra!</p>
            <input type="text" 
            onChange={salvaTexto}
            value={textoInput}/> 
            <button class="botao-chutar">Chutar</button>
        </div>

    );
}

//se a palavra que o user escreveu === a palavra do escolher palavra - venceu
// se a palavra que o user escreveu !== a palavra do escolher palavra - erro (imagem forca)
