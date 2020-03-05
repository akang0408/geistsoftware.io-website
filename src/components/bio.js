import React from 'react';

const bio = (props) => (
  <div className="teamMember" id={props.name}>
    <h3>{props.name}</h3>
    <img src={props.image}></img>
    <p>{props.text}</p>
  </div>
);

export default bio;
