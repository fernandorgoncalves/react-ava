function Condicional(){
    const Mercado =[
        {id:1,name:"Arroz",price:12.50},
        {id:2,name:"Feijão",price:15.50},
        {id:3,name:"Acucar",price:7.50},
        {id:3,name:"Café",price:17.50}
    ]
    //Renderização Ternaria
    return(
        <div>
            {Mercado.length > 1 ?
            (  
                <p> Deu certo</p>

            ):(
                <p>Deu errado</p>
            )
        }

        <div>
        {Mercado.length>1 &&
            (  
                <p> Aqui esta sua lista</p>

            )
        }
        </div>
        
        </div>  
        
    )
}
export default Condicional