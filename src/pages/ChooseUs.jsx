import React from 'react'

const ChooseUs = () => {
  return (
    <div className='chooseus'>
          <center>
              <div className='chooseus_head'>
              <span className=''>
                      Why <span className='text_color'>
                          
                          Choose 
                      </span>
                         {""} Us
                  </span>
              </div>
                  <p className='chooseus_head_para'>Choose us for comprehensive chronic disease reporting: Enter patient data effortlessly, visualize insights with dynamic pie charts, and access expert consultation via our intuitive </p>
              <div className='chooseus_content'>
                  <div className='chooseus_content_left'>
                      <img className='chooseus_content_left_img' src='chooseus.png' alt='chooseus_img'/>
                  </div>
                  <div className='chooseus_content_right'>
                      <div className='chooseus_content_right_head'> <h2>Benefits Of Talkspace</h2> </div>
                      <div className='chooseus_content_right_para'> <p>One of our standout features is the implementation of pie charts, which visually represent complex health data in an easily understandable format.
</p> </div>
                      <div className='chooseus_content_right_list'> <ul>
                          <li className='li'> advanced dashboard</li>
                          <li className='li'>Virtual Consultations</li>
                          <li className='li'>Emergency Assistance</li>
                         <li className='li'>Personalized Recommendations</li>
                      </ul> </div>
                  </div>
              </div>

      </center>
    </div>
  )
}

export default ChooseUs
