export default function Letras(){
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // const [letraJogo, setLetraJogo] = useState([]);
    function jogada(letra){
    
    }

    return (
        <div class="letras">
            {alfabeto.map((letra,index) => (
            <div 
                className = {`letra `} //condition(true) ? valor1 : valor2 se o jogo começou(true) enabled : disabled {!inicioJogo() ? disabled : letra} 
                key = {index} // sintaxe  ` ${terminadas.includes(tarefa) ? "finaliza" : ""}`
                onClick={jogada}
                >
                <p>{letra}</p>
                
            </div>

            ))}
            
        </div>
    
    );
}