import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class ClockBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 10 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentDidUpdate() {
    if (this.state.time < 1) {
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: (this.state.time - 1)
    });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Осталось {this.state.time}.</h2>
      </div>
    )
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <ClockBack />
      </div>
    )
  }
}

export default Timer;