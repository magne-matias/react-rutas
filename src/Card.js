import React from 'react'
import web from "../src/images/img-4.jpg";
import {NavLink} from 'react-router-dom'

const Card = (props) =>{
    return (
        <>
                <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{props.title}</h5>
                      <p className="card-text">Lleva energía a tu día aumentando tu concentración y productividad y mejora tu estado de ánimo creando un tono positivo para todo tu día. </p>
                      <NavLink to="/" className="btn btn-primary">Plan Mensual</NavLink>
                    </div>
                  </div>    
                </div>
        </>
    );
  };
  
export default Card;
