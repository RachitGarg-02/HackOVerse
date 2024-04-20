import React from "react";
const Home = () => {
  return (
    <div>
      <a
        style={{
          position: "absolute",
          left: "500px",
          marginTop: "42px",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
        href="#"
      >
        Home
      </a>
      <a 
        style={{
          position: "absolute",
          left: "700px",
          marginTop: "42px",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
        href="#form"
      >
        G-Report
      </a>
      <a
        style={{
          position: "absolute",
          left: "900px",
          marginTop: "42px",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
        href="/video"
      >
        Procure
      </a>
      <a
        style={{
          position: "absolute",
          left: "1100px",
          marginTop: "42px",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
        href="#"
      >
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

      <img className="home" src="home.svg" />
         <div className="btngenerate ">
         <button  style={{
          position: "absolute",
          left: "110px",
          backgroundcolor: '#00000',
         borderRadius:'2rem',
         bottom:'75px',
         padding:'20px'
        }}><a href="#form" style={{textDecoration:"none"}}> Generate Report</a></button>
         </div>
      <img className="sec" src="sec.svg" />
    </div>
  );
};

export default Home;