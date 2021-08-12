import React from 'react';

function UserGreeting(props) {
  return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
  return <h1>Войдите, пожалуйста.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class wait extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggle: false }
    this.handle = this.handle.bind(this);
  }

  handle() {
    this.setState(prevState => ({
      isToggle: !prevState.isToggle
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handle}>
          Хочешь войти? нажми
        </button>
        <Greeting isLoggedIn={this.state.isToggle} />
      </div>
    )
  }
}

export default wait;