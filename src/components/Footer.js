import logo from '../images/header/Logo.png'
import clogo from '../images/footer/Clogo.png'
import facebook from '../images/footer/Facebook.png'
import instagram from '../images/footer/Instagram.png'
import linkedin from '../images/footer/Linkedin.png'
import twitter from '../images/footer/Twitter.png'
import '../styling/footer/Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerLogo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='copyright'>
        <img src={clogo} alt='copyright' />
        <p>2022 - Powered by Finastic Solutions Ltd</p>
      </div>
      <div className='socialMedia'>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter' />
        <img src={instagram} alt='instagram' />
        <img src={linkedin} alt='linkedin' />
      </div>
    </div>
  )
}

export default Footer
