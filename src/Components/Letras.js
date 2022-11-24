export default function Letras(){
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    

    return (
        <div class="letras">
            {alfabeto.map((letra,index) => (
            <div 
                className={"letra"}
                key = {index}
                >
                <p>{letra}</p>
                
            </div>

            ))}
            
        </div>
    
    );
}