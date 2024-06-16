import { Link, NavLink } from "react-router-dom";
import "./index.css";
import icone from "../../assets/group.png";
import cart from "../../assets/cart.png";
const Header = () =>{
    return(
        <header>
           <div className="logo">
            <img src={icone} alt="Digita store logo" />
           <span className="logo-text">Digital Store</span>
           </div>
           <div className="pesquisa">
            <input type="text" placeholder="Pesquisar produto..." />
            <button></button>
           </div>
           <div className="acoes">
           <Link className="cadastro"  to={"/cadastro"}>Cadastre-se</Link>
           <Link className="entrar" to={"/login"}>Entrar</Link>
            <div className="carrinho">
                <img src={cart} alt="Icone carrinho" />
            </div>
           </div>
           <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/produtos"}>Produtos</NavLink>
                </li>
                <li>
                    <NavLink to={"/categorias"}>Categorias</NavLink>
                </li>
                <li>
                    <NavLink to={"/meus-produtos"}>Meus Produtos</NavLink>
                </li>
            </ul>
           </nav>
        </header>
    );
}
export default Header;