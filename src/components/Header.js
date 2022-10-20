import '../styling/header/Header.css'
import logo from '../images/header/Logo.png'
import login from '../images/header/Login.png'

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img src={logo} alt='logo' />
        <h5>Home</h5>
        <h5>Online Ordering</h5>
        <h5>Pricing</h5>
        <h5>Contact Us</h5>
      </div>
      <div className="headerLogin">
        <h5>Log In</h5>
        <img src={login} alt='login' />
      </div>
    </div>
  )
}

export default Header
