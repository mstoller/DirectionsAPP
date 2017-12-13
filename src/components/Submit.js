import React from 'react';

const Submit = (props) => {
  const { label, onSubmit } = props;
  return (
    <div className='buttonContainer'>
      <button type='button' onClick={onSubmit}>{label}</button>
    </div>
  )
}

export default Submit;
