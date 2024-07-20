function Carro(){

    const Car=[
        {id:1,marca:'Volkswagen',modelo:"Gol", ano:"1995"},
        {id:2,marca:'Ford',modelo:"Ka", ano:"2013"},
        {id:3,marca:'Fiat',modelo:"Uno", ano:"1999"},
        {id:4,marca:'Chevrolet',modelo:"Tracker", ano:"2005"}
    ]

    return(
        <>
            {Car.map((Car)=>
            <p id={Car.id}>O carro é {Car.marca} o modelo é {Car.modelo} e o ano é {Car.ano}</p>
        
        )}
        </>
    )
}
export default Carro