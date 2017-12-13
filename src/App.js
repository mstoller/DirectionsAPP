import React, { Component } from 'react';
import IpInputForm from './components/IpInputForm';
import Directions from './components/Directions';
import './App.css';

class App extends Component {
  state = {
    directions: [],
    error: false
  }
  
  reset = () => {
    this.setState({
      directions: [],
      error: false
    })
  }

  onSubmit = (ips) => {
    const {to, from} = ips;
    fetch(`https://pwev90469h.execute-api.us-east-1.amazonaws.com/dev/ips/${from}/${to}`)
    .then((response) => response.json())
    .then((data) =>  {
      console.log(data);
      if (data && data[0] && data[0]['legs'] && data[0]['legs'][0]) {
        this.setState({
          directions: [data[0]['legs'][0]]
        })
      }
    })
    .catch((err) => {
      this.setState({
        error: true
      });
    });
  }

  render() {
    const {directions, error} = this.state;
    
    return (
      <div>
        <header className="header">
          <h1>How long is the drive?</h1>
        </header>
        <div className="container">
          {directions.length === 0 && !error && 
            <IpInputForm onSubmit={this.onSubmit} />
          }
          {directions.length === 0 && error &&
            <div>
              <p>Can not find a valid route between these IP's</p>
              <button onClick={this.reset}>Close</button>
            </div>
          }
          {directions.length > 0 &&
            <div>
              <Directions directions={directions} />
              <button onClick={this.reset}>Close</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
