/*Props + Conditional Rendering*/
import Cart from "./Cart";
import './Header.css';
function Header({ count }) {
return (

    <header className="header">
        <h1 className="logo">MyStore</h1>


        <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        </nav>


        <div className="actions">
        <button className="signin">Sign In</button>


        <div className="cart">
        🛒
        <span className="badge">{count}</span>
        </div>
        </div>
        {count > 0 && <p>Cart Items: {count}</p>}
</header>
   

);
}


export default Header;