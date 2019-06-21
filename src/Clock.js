import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
    this.updateClock = this.updateClock.bind(this);
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.updateClock(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  updateClock() {
    console.log(this);
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <div>
        <h3>Current time is...</h3>
        <h2>
          {this.state.time}
        </h2>
      </div>
    );
  }
}

export default Clock;
