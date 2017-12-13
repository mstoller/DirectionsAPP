import React from 'react';

const Results = (d, k) => {
  return (
    <div className='results' key={k}>
      <p className='label'>Origin (Where are you leaving from?)</p>
      <p>{d.start_address}</p>
      <p className='label'>Destination (Where are you going?)</p>
      <p>{d.end_address}</p>
      <p className='label'>Trip Duration:</p>
      <p>{d.duration.text}</p>
      <p className='label'>Trip Distance:</p>
      <p>{d.distance.text}</p>
    </div>
  );
};

const Directions = (props) => {
  const dir = props.directions;
  const res = dir.map((d, k) => Results(d, k));

  return (
    <div>{res}</div>
  );
};

export default Directions;
