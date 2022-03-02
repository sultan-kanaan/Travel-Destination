import React from 'react';
import './Tour.css';

export default function Tour(props) {

  return (
    <div className="tstyle">
      <h3 className="namestyle">{props.mydata3.name}</h3>
      <img className="imgstyle" src={props.mydata3.image} alt="error" />
    </div>
  )
}