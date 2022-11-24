import React from "react";
export default function Jogo() {
    const [desativarInput, setDesativarInput] = useState(true)

    function iniciarJogo(){
      setDesativarInput(false)
    }
    return (
       
        <div class="container">

            <div class="forca"> 
                <img src="img/forca0.png" alt="" />
            </div>

            <div class="escolha">
                <div class="escolher-palavra" onClick={iniciarJogo}> <p>Escolher Palavra</p> </div>
                <div class="palavra-jogo">
                    <div class="letra-jogo">
                        
                    </div>
               
                    
                    
                </div>
            </div>
        </div>
      
    );
}