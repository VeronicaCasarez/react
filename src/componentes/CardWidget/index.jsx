import imgWidget from "../../assets/images/shopping-cart.png";
import "./CardWidget.css"

function CardWidget(){
    return(
        <div className="card-widget">
          
            <img className="card-img" src={imgWidget} alt="imagen del carrito" />
            
            <span className="card-text" >3</span>
        </div>
    )
}
export default CardWidget