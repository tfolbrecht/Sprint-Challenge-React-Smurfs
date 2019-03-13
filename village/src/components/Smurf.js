import React from 'react';
import axios from 'axios';




const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={ () => axios.delete(`http://localhost:3333/smurfs/${props.id}`)}>Delete</button>
    </div>
  );
}; 
Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
