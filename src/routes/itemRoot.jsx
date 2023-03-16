import NavBar from "../componentes/NavBar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";

function ItemRoot(){
    return(
        <div>
            
            <NavBar/>
            <h1 style={{fontSize:"20px"}} >Estoy en el item detail container</h1>
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemRoot;