
export default function Chute(props){
    

    const { alfabeto, chute, setChute, palavra, statusJogo, setStatusJogo, quantidadeErros, setQuantidadeErros, setClassePalavra, setPalavraEscondida, setAlfabeto } = props

    function chutePalavra(){        

        if(statusJogo === 'jogando'){
            
            if (palavra === chute.toLowerCase()) {                
                setStatusJogo("ganhou");
                setClassePalavra("correto");
                setPalavraEscondida(palavra);
                desativarTeclado();
    
            } else {                
                setQuantidadeErros(quantidadeErros + 1);
                if(quantidadeErros === 5){
                    setStatusJogo("perdeu");
                    setClassePalavra("errado");
                    setPalavraEscondida(palavra);
                    desativarTeclado();
                }
            }
        }        

    }

    function desativarTeclado() {
        alfabeto.map((letra) => letra.ativo = false);
    }
    
    return (

        <div className="chute">             
            <p>Já sei a palavra!</p>
            <input type="text"             
            disabled = { statusJogo !== 'jogando' }
            onChange={(event) => setChute(event.target.value)}
            data-test="guess-input"            
            />
            <button className="botao-chutar"
            onClick={chutePalavra}
            disabled = { statusJogo !== 'jogando' }
            data-test="guess-button"
            >Chutar</button>            
        </div>

    );
}

