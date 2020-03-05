import React from 'react';

const bio = (props) => (
  <div className="teamMember" id={props.name}>
    <h3>{props.name}</h3>
    <div className="personBio">
      <img src={props.image}></img>
      <p>{props.text}</p>
    </div>
  </div>
);

export default bio;
