import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h2>{props.id}</h2> {/*tmp*/}
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

