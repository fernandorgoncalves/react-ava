import styles from './Menu.module.css'
function Menu(){
    const menu=[
        {id:1,deshboard:"Dashboard"},
        {id:1,deshboard:"Cadastro"},
        {id:1,deshboard:"Faturamento"},
        {id:1,deshboard:"Financeiro"}
    ]

    return(
        <div className={styles.menu}>
        {menu.map((menu)=>
        <ul id={menu.id}><a href=""><li>{menu.deshboard}</li></a></ul> 
    
    )}
        </div>
    )

}
export default Menu