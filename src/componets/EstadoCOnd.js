import { useState } from "react"
function EstadoCOnd() {

    const [requisito,setRequisito] =useState(false)

    function Validacao(){
        setRequisito(true)
    }
    return(
        <div>
            <button onClick={Validacao}>Validar</button>
            {requisito=== true &&(
                <p>Você esta validado</p>
            )}
        </div>
    )
}
export default EstadoCOnd