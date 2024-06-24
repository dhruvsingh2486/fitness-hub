import React from "react";
import Navbar from "../navbar/Navbar";
import carausel_one_img from "../../images/carausel-1 img.jpg";
import carausel_two_img from "../../images/carausel-2 img.jpg";
import carausel_three_img from "../../images/carausel-3 img.jpg";
import carausel_four_img from "../../images/carausel-4 img.jpg";
import weight_room_image from '../../images/card images/weight room.jpg'
import cardio_zone_image from '../../images/card images/cardio-zone-image.jpg'


function Home() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleRide"
              className="carousel slide"
              data-bs-ride="true"
              data-bs-interval="4000"
            >
              <div className="carousel-inner" 
             style={{border:'5px solid lightBlue'}}>
                <div
                  className="carousel-item active"
                >
                  <img 
                    src={carausel_one_img}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carausel_two_img}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carausel_three_img}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carausel_four_img}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop:'3vh'}}>
        <div className="row">
          <div className="col-md-6">
            <div class="card text-bg-dark">
                
                <img src={cardio_zone_image} class="home-screen-card-img" alt="..." 
              style={{height:'55vh'}} />
                
             
              <div class="card-img-overlay">
               <div
                style={{backgroundColor:'black',
                    width:'200px', borderRadius:"20%"
                   }}>
               <h3 style={{color:'darkGrey'}} class="card-title">Cardio Zone</h3>
               </div>
                <p 
                style={{color:'Gold', fontWeight:'700', marginTop:'5vh', fontSize:'4vh'

                }}
                 class="card-text">
Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone                </p>
                <p class="card-text">
              
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div class="card text-bg-dark">
              <img src={weight_room_image} class="home-screen-card-img" alt="..." 
               style={{height:'55vh'}}/>
              <div class="card-img-overlay">
               <div style={{backgroundColor:'black',
                width:'200px', borderRadius:"20%"
               }}>
               <h3 style={{color:'darkGrey'}} class="card-title">Weight Room</h3>
               </div>
                <p 
                style={{color:'gold', fontWeight:'700', marginTop:'5vh', fontSize:'4vh'}}
                 class="card-text">
                 It utilizes total-body resistance moves that fatigue your muscles, and it's done at a fast pace with short rest breaks to raise your heart rate into the metabolic cardio-boosting zone.
                </p>
                <p class="card-text">
              
                </p>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default Home;
