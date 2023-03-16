import ItemListContainer from '../componentes/ItemListContainer';
import NavBar from '../componentes/NavBar';
import { useParams } from 'react-router-dom';
import products from '../mocks/products';
// import { ItemDetailContainer } from './ItemDetailContainer';


import './routes.css'

function Root() {
  // const params=useParams();
  // console.log({params})
  // const isCategoryRoute=Boolean(params.category);
  // console.log({isCategoryRoute})
  
  const params = useParams();
  console.log({params})
  const isCategoryRoute=Boolean(params.id);
 console.log({isCategoryRoute})



    return (
      <div>
   
        <div>
    
          <NavBar className="nav-bar-styles" />

       
          <ItemListContainer isCategoryRoute={isCategoryRoute} categoryId={params.id} greeting={"Tienda Virtual"}/>
  
         
        </div>
         
      </div>
   

   
  
    );
  
    }


export default Root;
