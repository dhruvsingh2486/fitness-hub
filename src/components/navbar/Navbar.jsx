import React from "react";
import logo_img from '../../images/logo_images.png' 


function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <nav
            style={{
              // border: "1px solid black",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <div
              className="navbar"
              style={{
                // border: "1px solid red",
                margin: "auto",
                textAlign: "center",
              }}
            >
             <img className="logoImg" src={logo_img} alt="" />

              <div className="chlickableContentsNav">
                    <button className="btn-hover">HOME</button>
                    <button className="btn-hover">ABOUT US</button>
                    <button className="btn-hover">OUR TEAM</button>
                    <button className="btn-hover">MEMBERSHIP</button>

                    
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
