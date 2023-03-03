import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'


import './App.css'

function App() {
 

  return (
    <div className="App">
      <div>
          <NavBar/>
          <ItemListContainer greeting={"Tienda Virtual"}/>
      </div>

      
    </div>


   
  )
}

export default App
