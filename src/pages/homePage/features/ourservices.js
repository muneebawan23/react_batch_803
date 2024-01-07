import React from 'react'
import Servicecard from '../../../global/components/service_card'
const Ourservices= () => {
  return (
    <div className='ourservices page_width'>
    <h3 className='global_title'>Explore Our <span>Services</span></h3>
        <div className="card_grid">
           <Servicecard service_img="https://images.pexels.com/photos/6197116/pexels-photo-6197116.jpeg?auto=compress&cs=tinysrgb&w=600" title="AC DUCT"/>
           <Servicecard/>
           <Servicecard/>
           <Servicecard/>
        </div>
      
    </div>
  )
}

export default Ourservices
