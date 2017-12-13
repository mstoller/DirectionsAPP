import React from 'react';

const IpInput = (props) => {
  const { placeholder, value, label, inputName, ipInputUpdate, errorState } = props;
  return (
    <div className='ipInput'>
      <label htmlFor={inputName}>{label}</label>
      <input 
        type='text' 
        placeholder={placeholder} 
        value={value} 
        onChange={ipInputUpdate} 
        name={inputName} 
        className={errorState} />
      {errorState === 'error' &&
        <p className='error'>Please enter a valid IP.</p>
      } 
    </div>
  );
}

export default IpInput;
