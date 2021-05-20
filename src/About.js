import React from 'react'
import web from "../src/images/Yoga-Love.svg"
import Common from './Common';



const About = () =>{
    return (
        <>
        <Common name='Nuestro profesores de  ' imgsrc={web} visit='/contact' btname="" />
        
        
        
        <div class="grid-container">
          <div>
          <div className="card-profe">
          <img className="profile-card" src="https://picsum.photos/id/237/536/354"/>
          <h1>Dami</h1>
          <p className="title">Profesor 1</p>
          
          <p><button className="call-profe">Contact</button></p>
        </div>
          </div>
          <div>
          <div className="card-profe">
          <img className="profile-card" src="https://picsum.photos/id/237/536/354"/>
          <h1>Mati</h1>
          <p className="title">Profesor 2</p>
          
          <p><button className="call-profe">Contact</button></p>
        </div>
          </div>
          <div>
          <div className="card-profe">
          <img className="profile-card" src= "https://picsum.photos/id/237/536/354"/>
          <h1>Carla</h1>
          <p className="title">Profesor 3</p>
          
          <p><button className="call-profe">Contact</button></p>
        </div>
          </div> 
        </div>
        </>
    );
  };
  
export default About;
