function CondicionalFunction(){
    const DinheiroAtual =100;
    const Salario =1000;
    
    function SalarioAtual(a,b) {
        var c = a + b
        return(
            c
        )
    }
    var total = SalarioAtual(DinheiroAtual,Salario)
    return(
        <div>
            {total >= 8000 ?
            (  
                <p>{total}</p>

            ):(
                <p>Que pena não será dessa vez</p>
            )
        }
        
        </div>  
        
    )
}
export default CondicionalFunction