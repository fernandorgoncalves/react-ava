function Clique() {
    function Clicado(){
        window.alert("Você clicou no botão")
    }
    function Passouporcima() {
        window.alert("Você passou pelo botão")
    }
    return(
        <div>
                    <button onClick={Clicado}>Clique aqui!</button><br/>
                    <button onMouseEnter={Passouporcima}>teste</button>
        </div>

    )
}
export default Clique