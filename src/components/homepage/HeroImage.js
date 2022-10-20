import '../../styling/homepage/HeroImage.css'
import tick from '../../images/homepage/tick.png'
import heroimage from '../../images/homepage/heroimage.png'

function HeroImage() {
  return (
    <div className='heroImageContainer'>
      <div className='heroImageHeading'>
        <h1>Simplify and grow your business with our <br/>one-stop shop for managing online orders.</h1> 
        <h3>We're serving up a streamlined online ordering system<br/>so you can focus on serving up delicious meals</h3>
      </div>
      <div className='heroImageTicks'>
        <h4><img src={tick} alt='tick' /> Integrate all your online sales channels into one system.</h4>
        <h4><img src={tick} alt='tick' /> Send your orders straight to the kitchen.</h4>
        <h4><img src={tick} alt='tick' /> No more manual order taking.</h4>
        <h4><img src={tick} alt='tick' /> Reduce order errors.</h4>
      </div>
      <div className='heroImageButton'>
        <button>Get started for free</button>
      </div>
      <div className='heroImage'>
        <img src={heroimage} alt='eating together' />
      </div>
    </div>
  )
}

export default HeroImage
