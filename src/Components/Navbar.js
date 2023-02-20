import './Navbar.css'
import logo from '../images/t2a_croped.png'

function Navbar() {
  return (
    <nav>
      <div className="navbar-left">
        <ul>
        <a href="/" className="logo"><img src={logo} alt="Text2audio Logo" style={{ width: 250, height: 49 }}/>
</a>
        </ul>
      </div>
      <div className="navbar-right">
        <a href=""><button className="contribute-btn">Donate</button></a>
      </div>
    </nav>
  );
}

export default Navbar;
