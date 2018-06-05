import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
      hasBeenClicked: false,
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      }
    };
  }

  handleClick = () => {
    this.setState = ({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
    console.log(this)
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ClickityClick;
