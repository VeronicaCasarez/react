import CardWidget from "../CartWidget";
import "./navBar.css";


function NavBar(){
    return (
        <div className="navbar">
            <ul >
                <li>
                    <button >Home</button>
                </li>
                <li>
                    <button>Productos</button>
                </li>
                <li>
                    <button>Contacto</button>
                </li>
                
            </ul>
            <CardWidget />
        </div>
     );

}
export default NavBar;