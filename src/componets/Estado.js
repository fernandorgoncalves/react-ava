import {useState, useEffect} from 'react'
function Estado(){

    
    const [idade, setIdade] =useState(1)
    function Aniversario(){
        setIdade(idade+1)
    }

    useEffect(()=>{
        window.alert("Parabéns!!!")
    },[idade])


    return(
        <>
            <button onClick={Aniversario}>Clique aqui para fazer aniversario</button><br/>
            {idade}
        </>
    )
}
export default Estado