import ItemListContainer from '../componentes/ItemListContainer';

import { useParams } from 'react-router-dom';

import './routes.css'

function Root() {
  
  const params = useParams();
  const isCategoryRoute=Boolean(params.id);


    return (
      <div>
   
        <div>
    
            
          <ItemListContainer isCategoryRoute={isCategoryRoute} 
          categoryId={params.id} greeting={"Chocolates, alfajores y productos directo de bariloche"}/>
  
         
        </div>
         
      </div>
   

   
  
    );
  
    }


export default Root;
