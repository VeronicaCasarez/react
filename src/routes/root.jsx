import ItemListContainer from '../componentes/ItemListContainer';
import NavBar from '../componentes/NavBar';
import { useParams } from 'react-router-dom';

import './routes.css'

function Root() {
  
  const params = useParams();
  const isCategoryRoute=Boolean(params.id);


    return (
      <div>
   
        <div>
    
          <NavBar className="nav-bar-styles" />

       
          <ItemListContainer isCategoryRoute={isCategoryRoute} 
          categoryId={params.id} greeting={"Tienda Virtual"}/>
  
         
        </div>
         
      </div>
   

   
  
    );
  
    }


export default Root;
