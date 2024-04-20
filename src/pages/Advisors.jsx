import React from 'react'

const Advisors = () => {
  return (
      <div className='advisors'>
          <img className='advisors_img' src='Advise.png' alt='img' />
          <div className='advisors_content'>
      <h1 className='advisors_head'>Consult Our Patient Advisors</h1>
              <button className='advisors_button'>
                  <a href='https://meet.google.com/cjd-ecgy-vsw' style={{textDecoration:"none", color:"black"}}>
                      
                  Consult Now
                  </a>
              </button>
          </div>
          <img className='footer' src='Footer.png'/>
    </div>
  )
}

export default Advisors
