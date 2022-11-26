
export default function Chute(props){
// const [textoInput, setTextoInput] = useState("") // criar o estado -> onChange -> value (input controlado)
const errosForca = 6

const {chute, setChute, palavra, setStatusJogo, setErros} = props
function chutePalavra(){
const palavraString = palavra.toString()
if (palavraString === chute.toLowerCase()) {
    setStatusJogo("ganhou")
} else {
    setStatusJogo("perdeu")
    setErros(errosForca)
}
}


// function salvaTexto(event){
// console.log(setTextoInput(event.target.value)) //input controlado para poder usar na lista/mostrar pro user
// }
 //value embaixo = saber que tem q zerar futuramente (aula quinta)
    return (

        <div class="chute"> 
            <p>Já sei a palavra!</p>
            <input type="text" 
            onChange={(event) => setChute(event.target.value)}
            value={chute}/> 
            <button class="botao-chutar"
            onClick={chutePalavra}
            >Chutar</button>
        </div>

    );
}

//se a palavra que o user escreveu === a palavra do escolher palavra - venceu
// se a palavra que o user escreveu !== a palavra do escolher palavra - erro (imagem forca)
