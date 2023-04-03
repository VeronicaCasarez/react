import { Outlet as Page} from "react-router-dom";
import NavBar from "../NavBar";

function Layout (){
    return (
        <main>
            <NavBar/>
            <Page/>
        </main>
    )
}

export default Layout;