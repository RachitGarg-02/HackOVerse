import React from 'react';
import Video from './Video';
import { useNavigate } from 'react-router-dom';

const VideoPage = () => {
  const navigate = useNavigate();
  return (
    <div className='videoPage'>
      
     

      <a href="/"
        className='links'
        style={{
       position: "absolute",
    left: "500px",
    top: "42px",
    textDecoration: "none",
    fontSize: "1.5rem"
     }}
      >
        Home
      </a>
      <a
        href="#"
        style={{
          position: "absolute",
          left: "700px",
          top: "42px",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
      >
        G-Report
      </a>
      <a
        href="/video"
        style={{
          position: "absolute",
          left: "900px",
          top: "42px",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
      >
        Procure
      </a>
     
      <a href="#" style={{position:"absolute", left:"1100px",top:"42px", textDecoration:"none",fontSize:"1.5rem"}}>
        Lab test
      </a>
      
      <button  style={{
          position: "absolute",
          right: "50px",
          top: "32px",
          backgroundcolor: '#8674d5',
          borderRadius:'2rem',
              padding: '15px',
            zIndex:100,
          }}>
              <a href='https://meet.google.com/cjd-ecgy-vsw' style={{textDecoration:"none", color:"black"}}>
              Consult Now
              </a>
          </button>
    
    
  <img className='videoPage_navbar' src='Navbar.svg'/>
      <h1 className="videoPage_head"> Procure Sugar Level Video</h1>
    
    <div className='video_row'>
      <Video src={"https://www.youtube.com/embed/_f97dPx2vjI?si=oSPqClOToxy_7-Xb"}/>
      <Video src={"https://www.youtube.com/embed/UznxKiHrNx4?si=UOLSUVftl8bGdo51"}/>
    </div>
    

      <h1 className="videoPage_head2"> Procure Haemoglobin Video</h1>
    
    <div className='video_row'>
      <Video src={"https://www.youtube.com/embed/FMyAfpeR2xo?si=mgBjaCJ3c_mX_m2u"}/>
      <Video src={"https://www.youtube.com/embed/UBtqObo3Fio?si=G-PDcFt77qUTtAY3"}/>
    </div>    

<h1 className="videoPage_head2"> Procure Oxygen Video</h1>

<div className='video_row'>
<Video src={"https://www.youtube.com/embed/83hMqUm-33E?si=6jhXwGLHkEl5LM78"}/>
<Video src={"https://www.youtube.com/embed/iHmENhOny3g?si=pmN3VzN4ytHqFlIV"}/>
</div>    

<h1 className="videoPage_head2"> Procure Heart Rate Video</h1>

<div className='video_row'>
<Video src={"https://www.youtube.com/embed/zqi4u3H5H7A?si=Fvd0LAcJ442pei0j"}/>
<Video src={"https://www.youtube.com/embed/AeSjCziKnSs?si=snxfGcwDCEcUKqZF"}/>
    </div>
    

<h1 className="videoPage_head2"> Procure Pulse Rate Video</h1>

<div className='video_row'>
<Video src={"https://www.youtube.com/embed/DLmmN0jy-s0?si=gdQtkexEZlYMx9XM"}/>
<Video src={"https://www.youtube.com/embed/7xoTzpSKdpQ?si=lNzSdZwQnCLXiVo6"}/>
</div>



  </div>
  );
}


export default VideoPage;
