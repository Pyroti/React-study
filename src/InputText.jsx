import React from 'react';

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.changeEvent = this.changeEvent.bind(this);
  }

  changeEvent(event) {
    this.setState({ counter: event.target.value });
  }

  plusOneEvent = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    const mas = [1, 2, 3, 4, 5];

    return (
      <div>
        <input
          type="number"
          onChange={this.changeEvent}
          value={this.state.counter}
        />
        <button onClick={this.plusOneEvent}>увеличить на 1</button>
        <ul>
          {mas.map((item, index) => {
            return <li key={Math.random()}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default InputText;
