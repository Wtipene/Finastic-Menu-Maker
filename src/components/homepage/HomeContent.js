import menu from '../../images/homepage/menu management.png'
import analytics from '../../images/homepage/analytics.png'
import tablet from '../../images/homepage/tablet.png'
import '../../styling/homepage/HomeContent.css'

function HomeContent() {
  return (
    <div className='homeContentContainer'>
      <div className='homeContentHeading'>
        <h1>Why choose us?</h1>
      </div>
      <div className='tabletContent'>
        <div>
            <h3>Menu integration</h3>
            <h1>Get all online orders onto one single tablet</h1>
            <p>Juggling online orders from 5 different tablets? Magic Menu<br/>
            Maker integrates all your online sales channels onto one<br/>
            tablet, never manually enter orders again!</p>
        </div>
        <div>
            <img src={tablet} alt='tablet' />
        </div>
      </div>
      <div className='menuContent'>
        <div>
            <img src={menu} alt='menu management' />
        </div>
        <div>
            <h3>Menu Management</h3>
            <h1>Need to make a menu change?<br/>It's so simple.</h1>
            <p>With our menu management system, you can publish<br/>
            changes across all your sales channels at once. Just<br/>
            one click and that's half an hour of your day back!</p>
        </div>
      </div>
      <div className='analyticsContent'>
        <div>
            <h3>Order Analytics</h3>
            <h1>Want to know what your customers want more of?</h1>
            <p>track your sales, revenue and reviews with our super digestible analytics<br/>
            tailored just for your restaurant! Get daily insights on your business<br/>
            performanec, growth opportunities and resolve issues faster.</p>
        </div>
        <div>
            <img src={analytics} alt='analytics' />
        </div>
      </div>
      <div className='getStarted'>
        <h1>Start setting up your online ordering system now</h1>
        <p>No credit card or personal info needed - just start setting up!</p>
        <p>Still unsure?<br/>
        Try a 3 month free trial!</p>
        <button>Get started for free</button>
      </div>
    </div>
  )
}

export default HomeContent
