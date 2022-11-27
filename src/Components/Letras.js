import React from "react";

export default function Letras(props) {
    
    const { alfabeto, palavra, palavraEscondida, setPalavraEscondida, statusJogo, setStatusJogo, quantidadeErros, setQuantidadeErros, setClassePalavra }  = props;    
    
    const [letraSelecionada, setLetraSelecionada] = React.useState();
    
    function jogada(letra){ 
        
        if(statusJogo === 'jogando'){

            letra.ativo = false;        
            setLetraSelecionada(letra);
        
            const existeLetraNaPalavra = palavra.includes(letra.valor);        
        
            const arrayPalavraEscondida = palavraEscondida;            

            if(existeLetraNaPalavra){
        
                for(let i = 0; i < palavraEscondida.length; i++){
                
                    if(letra.valor === palavra[i]){                        

                        arrayPalavraEscondida[i] = letra.valor;                    

                        setPalavraEscondida([...arrayPalavraEscondida]);                   
                    }                    
                }

                checarStatusJogo();

            }else{
                setQuantidadeErros(quantidadeErros + 1);
                checarStatusJogo();
            }
        }
        
    }
  
    function checarStatusJogo(){
        
       if (quantidadeErros === 5) {
            setStatusJogo("perdeu");
            setClassePalavra("errado");
            setPalavraEscondida(palavra);
        }else if(palavra === palavraEscondida.join('')){
            console.log('ganhou');
            setStatusJogo("ganhou");
            setClassePalavra("correto");
            setPalavraEscondida(palavra);
        }
    } 

    return (

        <div className="letras">
            {alfabeto.map((letra, index) => (            
            
            <button                
                className = { letra.ativo ? `letra` : `letra-desativada` } 
                disabled = { !letra.ativo }
                key = {index} 
                onClick={() =>{jogada(letra)}}
                data-test="letter"
                >
                <p>{letra.valor.toUpperCase()}</p>
                
            </button>

            ))}
           
        </div>
    
    );
}