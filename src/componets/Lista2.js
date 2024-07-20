function Lista2(){

    const Time =[
        {id:1,name:"Corinthians", estado:"SP" },
        {id:1,name:"Flamengo", estado:"RJ" },
        {id:1,name:"Cruzeiro", estado:"MG" },
        {id:1,name:"Internacional", estado:"RS" },
    ]

    return(
        <>
            {Time.map((Time)=>
            <p id={Time.id}>{Time.name} é o melhor do mundo e esta no estado{Time.estado}</p>
            

              )}
        
        </>
    )
}
export default Lista2