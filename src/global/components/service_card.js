


import React from 'react';

const Servicecard = ({ service_img, title }) => {
  
  console.log('service_img:', service_img); // Log the value for debugging

  return (
    <div>
      <div className="service_card">
        <img src={service_img ? service_img : "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600"} width='100%' />
        <div className="over_lay">
          <div className="content">
            <h2>{title ? title : 'TITLE'}</h2>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;


