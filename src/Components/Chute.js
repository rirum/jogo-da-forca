
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

        <div class="chute">             
            <p>Já sei a palavra!</p>
            <input type="text"             
            disabled = { statusJogo !== 'jogando' }
            onChange={(event) => setChute(event.target.value)}            
            />
            <button class="botao-chutar"
            onClick={chutePalavra}
            disabled = { statusJogo !== 'jogando' }
            >Chutar</button>            
        </div>

    );
}

//se a palavra que o user escreveu === a palavra do escolher palavra - venceu
// se a palavra que o user escreveu !== a palavra do escolher palavra - erro (imagem forca)
