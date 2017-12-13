import React, { Component } from 'react';
import isIp from 'is-ip';
import IpInput from './IpInput';
import Submit from './Submit';

class IpInputForm extends Component {
  state = {
    from: '',
    to: '',
    fromError: '',
    toError: ''
  }

  onSubmit = () => {
    const validFrom = isIp(this.state.from);
    const validTo = isIp(this.state.to);
    if (validFrom && validTo) {
      this.props.onSubmit(this.state);      
    } else {
      this.error(validFrom, validTo);
    }
  }

  error = (validFrom, validTo) => {
    this.setState({
      fromError: validFrom ? '' : 'error',
      toError: validTo ? '' : 'error'
    })
  }

  onUpdate = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    const {from, to, fromError, toError} = this.state;
    return (
      <div className='inputForm'>
        <IpInput
          placeholder='Directions from IP'
          label='Give us your origin:'
          inputName='from' 
          ipInputUpdate={this.onUpdate}
          errorState={fromError}
          value={from} />
        <IpInput
          placeholder='Directions to IP'
          label='Give us your destination:'
          inputName='to' 
          ipInputUpdate={this.onUpdate}
          errorState={toError}
          value={to} />
        <Submit
          label='Submit'
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default IpInputForm;
