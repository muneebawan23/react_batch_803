import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'
function Footer() {
  return (
    <div>
       <footer>
        <div className="column_one">
          <img src={Logo}/>
          <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
        </div>
        <div className="column_two">
          <div className="grid-container1">
            <div className="grid-item" style={{color: 'black'}}>Home</div>
            <div className="grid-item">Services</div>
            <div className="grid-item">Contact</div>
          </div>
          <div className="grid-container1">
            <div className="grid-item">Facebook</div>
            <div className="grid-item">Linkedin</div>
            <div className="grid-item">Twitter</div>  
            <div className="grid-item">Instagram</div>
          </div> 
        </div>
        <div className="column_three">
          <div>
            <ul>
              <li>
                0314-1234567
              </li>
              <li>
                info@homecomfort.com
              </li>
            </ul>
            <div className="news_letter">
              <input type="text" placeholder="email" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
