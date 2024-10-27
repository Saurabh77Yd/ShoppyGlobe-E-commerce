import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  //Navber link for home and cart items
  <nav className="navbar">
    <Link to="/" className="nav-item">
      Home
    </Link>
    <Link to="/cart" className="nav-item">
      Cart
    </Link>
  </nav>
);

export default Header;
