
import {useParams} from 'react-router-dom';
import NavBar from "../componentes/NavBar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";


function ItemRoot(){
    const parameters=useParams();

        return (
            <div>
               
                <NavBar/>
                <h1>Estas en el detalle del producto</h1>
                <ItemDetailContainer itemId={parameters.id}/>
               
                           
            </div>
    )
}

export default ItemRoot;