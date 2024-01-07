import React from 'react'
import ClientImage from '../../../assets/images/home/review_img.png'
const Client = () => {
  return (
    <div className='page_width our_client'>
    <div className="header_content_clients">
      <h2 className='global_title'>Our <span>Clients</span></h2>
      
      <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
    </div>
    <div className='client_card_grid'>
    <div className="client_card">
            <div className="outer_content">
                <div className="img">
                    <img src={ClientImage}/>
                </div>
                <div className="img_content">
                    <h2>Aleena</h2>
                    <div className="rating">
                        <small>3 years Ago</small>
                        <div className="star">

                        </div>
                    </div>
                </div>

            </div>
            <div className="lower_content">
            <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
        </div>
      </div>
 </div>
  )
}

export default Client
