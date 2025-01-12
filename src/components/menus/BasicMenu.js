import { Link } from "react-router-dom";
import '../../styles/BasicMenu.css';

const BasicMenu = () => {
    return (
        <nav id='navbar'>
            <div className="left-menu">
                <ul className="menu-list">
                    <li className="menu-item"> <Link to={'/'}>Main</Link> </li>
                    <li className="menu-item"> <Link to={'/about'}>About</Link> </li>
                </ul>
            </div>
            <div className="right-menu">
                <div className="login-button">Login</div>
            </div>
        </nav>
    );
}
export default BasicMenu;     
