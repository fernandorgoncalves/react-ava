function Lista(){

    const Mercado =[
        {id:1,name:"Arroz",price:12.50},
        {id:2,name:"Feijão",price:15.50},
        {id:3,name:"Acucar",price:7.50},
        {id:3,name:"Café",price:17.50}
    ]

    return(
        <div>  
            <h1>Reinderização de lista</h1>
            {Mercado.map((Mercado)=>
            <p key={Mercado.id}>{Mercado.name} Possui o preço: R${Mercado.price}</p>
        )}
        </div>
    )
}
export default Lista 